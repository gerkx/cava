import { parseSVG, parseSVGAspectRatio } from './parse-svg';

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