import * as fs from 'fs';
import * as path from 'path';
import { parse, walk } from 'svelte/compiler';
import type { parsedSVG, svgAttr } from '../src/lib/types'

const parseSVG = ( svgString: string ): parsedSVG => {
    const svgAttr:svgAttr = {};
    const svgChildren:string[] = [];
    const svgClasses:any[] = [];

    const ast = parse(svgString);
    walk(ast.html, {
        // @ts-ignore
        enter(node:NodeElement) {
            if (node.type === 'Element' && node.name === 'svg') {
                node.children.forEach( child => {
                    svgChildren.push(svgString.slice(child.start, child.end))
                })

                node.attributes.forEach( attr => {
                    if (attr.name === 'class') {
                        svgClasses.push(attr.value)
                    }
                    else {
                        svgAttr[attr.name] = attr.value[0].raw
                    }
                })
            }
        }
    })
    return { attr: svgAttr, children: svgChildren, classes: svgClasses}
}

const parseSVGAspectRatio = (svg:parsedSVG): number => {
    const keys = Object.keys(svg.attr)
    if ('viewBox' in keys) {
        let coords: string[];
        if (svg.attr.viewBox.includes(',')) {
            coords = svg.attr.viewBox.split(',').map(x => x.replace(/\s+/g, ''));
        }
        else {
            coords = svg.attr.viewBox.split(' ');
        }
        const width = parseFloat(coords[2])
        const height = parseFloat(coords[3])
        if (width && height && height !== 0) {
            return width / height
        }
    }

    if ('height' in keys && 'width' in keys) {
        const width = parseFloat(svg.attr.width);
        const height = parseFloat(svg.attr.height);
        if (width && height && height !== 0) {
            return width / height
        }
    }

    return 1.0
}

interface iconOpts {
    height?: string,
    fill?: string,
    stroke?: string,
}

export const svgToIcon = (svg:string, opts:iconOpts) => {
    const parsedSVG = parseSVG(svg);

    delete parsedSVG.attr.fill;
    delete parsedSVG.attr.stroke;
    delete parsedSVG.attr.height;
    delete parsedSVG.attr.width;


    let attrStr = ''
    for (let key in parsedSVG.attr) {
        attrStr += `${key}="${parsedSVG.attr[key]}"`
    }

    return `<script lang="ts">
        import type { inputSize } from '$lib/types';
        import { INPUT_SIZE_MAP } from '$lib/logic/inputs';
        import { parseLength } from '$lib/logic/svg';

        export let height: string = "${opts.height ? opts.height : '1em'}";
        export let fill: string = "${opts.fill ? opts.fill : 'currentColor'}";
        export let stroke: string | undefined = ${opts.stroke ? opts.stroke : undefined}; 
        export let scale: number = 1.0;
        export let aspectRatio: number = ${parseSVGAspectRatio(parsedSVG)};
        export let size: inputSize = null;

        const calcSize = (baseSize: number): number => {
            let calcSize = baseSize;
            if (size) {
                const factor = INPUT_SIZE_MAP[size]
                if (factor) calcSize *= factor
            } 
            if (scale) calcSize *= scale;

            return calcSize
        }

        const heightTup = parseLength(height);
        const scaledHeight = \`\${calcSize(heightTup[0])}\${heightTup[1]}\`;
        
        const derivedWidthVal = calcSize(heightTup[0]*aspectRatio);
        const derivedWidth = \`\${derivedWidthVal}\${heightTup[1]}\`;

    </script>

    <svg 
        height={scaledHeight}
        width={derivedWidth}
        {fill}
        {stroke}
        viewBox="0 0 48 48"
        {...$$restProps}
    >
        ${parsedSVG.children.join('\n')}
    </svg>`
}

interface iconSetConfig {
    svgDir: string;
    iconSetDir: string;
}

const iconSets: iconSetConfig[] = [
    {
        svgDir: path.join('node_modules', '@adobe', 'spectrum-css-workflow-icons', 'dist', '24'),
        iconSetDir: path.join('src', 'lib', 'components', 'icons')
    }
]

const createIconSet = (config:iconSetConfig) => {
    const parseLengthPath = path.relative(config.iconSetDir, './Logic/SVG/parse-svg')
    .split(path.sep).join('/')
    const inputSizePath = path.relative(config.iconSetDir,'./typings')
    .split(path.sep).join('/')
    const inputSizeMapPath = path.relative(config.iconSetDir, './Logic/Inputs/constants')
    .split(path.sep).join('/')
    
    fs.readdirSync(config.svgDir).forEach(icon => {
        const svgPath = path.join(config.svgDir, icon);
        const svg = fs.readFileSync(svgPath, 'utf8');
        const component = svgToIcon(svg, {});
        const basename = path.basename(svgPath, '.svg')
        fs.writeFileSync(path.join(config.iconSetDir, `${basename}.svelte`), component)
    });
}

createIconSet(iconSets[0])