"use strict";
exports.__esModule = true;
exports.svgToIcon = void 0;
var fs = require("fs");
var path = require("path");
var compiler_1 = require("svelte/compiler");
var parseSVG = function (svgString) {
    var svgAttr = {};
    var svgChildren = [];
    var svgClasses = [];
    var ast = compiler_1.parse(svgString);
    compiler_1.walk(ast.html, {
        // @ts-ignore
        enter: function (node) {
            if (node.type === 'Element' && node.name === 'svg') {
                node.children.forEach(function (child) {
                    svgChildren.push(svgString.slice(child.start, child.end));
                });
                node.attributes.forEach(function (attr) {
                    if (attr.name === 'class') {
                        svgClasses.push(attr.value);
                    }
                    else {
                        svgAttr[attr.name] = attr.value[0].raw;
                    }
                });
            }
        }
    });
    return { attr: svgAttr, children: svgChildren, classes: svgClasses };
};
var parseSVGAspectRatio = function (svg) {
    var keys = Object.keys(svg.attr);
    if ('viewBox' in keys) {
        var coords = void 0;
        if (svg.attr.viewBox.includes(',')) {
            coords = svg.attr.viewBox.split(',').map(function (x) { return x.replace(/\s+/g, ''); });
        }
        else {
            coords = svg.attr.viewBox.split(' ');
        }
        var width = parseFloat(coords[2]);
        var height = parseFloat(coords[3]);
        if (width && height && height !== 0) {
            return width / height;
        }
    }
    if ('height' in keys && 'width' in keys) {
        var width = parseFloat(svg.attr.width);
        var height = parseFloat(svg.attr.height);
        if (width && height && height !== 0) {
            return width / height;
        }
    }
    return 1.0;
};
var svgToIcon = function (svg, opts) {
    var parsedSVG = parseSVG(svg);
    delete parsedSVG.attr.fill;
    delete parsedSVG.attr.stroke;
    delete parsedSVG.attr.height;
    delete parsedSVG.attr.width;
    var attrStr = '';
    for (var key in parsedSVG.attr) {
        attrStr += key + "=\"" + parsedSVG.attr[key] + "\"";
    }
    return "<script lang=\"ts\">\n        import type { inputSize } from '$lib/types';\n        import { INPUT_SIZE_MAP } from '$lib/logic/inputs';\n        import { parseLength } from '$lib/logic/svg';\n\n        export let height: string = \"" + (opts.height ? opts.height : '1em') + "\";\n        export let fill: string = \"" + (opts.fill ? opts.fill : 'currentColor') + "\";\n        export let stroke: string | undefined = " + (opts.stroke ? opts.stroke : undefined) + "; \n        export let scale: number = 1.0;\n        export let aspectRatio: number = " + parseSVGAspectRatio(parsedSVG) + ";\n        export let size: inputSize = null;\n\n        const calcSize = (baseSize: number): number => {\n            let calcSize = baseSize;\n            if (size) {\n                const factor = INPUT_SIZE_MAP[size]\n                if (factor) calcSize *= factor\n            } \n            if (scale) calcSize *= scale;\n\n            return calcSize\n        }\n\n        const heightTup = parseLength(height);\n        const scaledHeight = `${calcSize(heightTup[0])}${heightTup[1]}`;\n        \n        const derivedWidthVal = calcSize(heightTup[0]*aspectRatio);\n        const derivedWidth = `${derivedWidthVal}${heightTup[1]}`;\n\n    </script>\n\n    <svg \n        height={scaledHeight}\n        width={derivedWidth}\n        {fill}\n        {stroke}\n        viewBox=\"0 0 48 48\"\n        {...$$restProps}\n    >\n        " + parsedSVG.children.join('\n') + "\n    </svg>";
};
exports.svgToIcon = svgToIcon;
var iconSets = [
    {
        svgDir: path.join('node_modules', '@adobe', 'spectrum-css-workflow-icons', 'dist', '24'),
        iconSetDir: path.join('src', 'lib', 'components', 'icons')
    }
];
var createIconSet = function (config) {
    var parseLengthPath = path.relative(config.iconSetDir, './Logic/SVG/parse-svg')
        .split(path.sep).join('/');
    var inputSizePath = path.relative(config.iconSetDir, './typings')
        .split(path.sep).join('/');
    var inputSizeMapPath = path.relative(config.iconSetDir, './Logic/Inputs/constants')
        .split(path.sep).join('/');
    fs.readdirSync(config.svgDir).forEach(function (icon) {
        var svgPath = path.join(config.svgDir, icon);
        var svg = fs.readFileSync(svgPath, 'utf8');
        var component = exports.svgToIcon(svg, {});
        var basename = path.basename(svgPath, '.svg');
        fs.writeFileSync(path.join(config.iconSetDir, basename + ".svelte"), component);
    });
};
createIconSet(iconSets[0]);
