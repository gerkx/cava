import { parse, walk } from 'svelte/compiler';
import type { parsedSVG, svgAttr } from '../../types'


export const parseSVG = ( svgString: string ): parsedSVG => {
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


export const parseLength = (attr:string): [number, string] => {
    const valueRegExMatches = attr.match(/\.?\d+/);
    if (!valueRegExMatches) {
        throw `The ${attr} passed as an attribute length argument doesn't contain a valid numeric value`;
    }
    const value = parseFloat(valueRegExMatches[0])

    const unitRegexMatches = attr.match(/\D+$/)
    const unit = !unitRegexMatches ? 'px' : unitRegexMatches[0];

    return [value, unit]    
}

export const parseSVGAspectRatio = (svg:parsedSVG): number => {
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