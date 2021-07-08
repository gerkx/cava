const fs = require('fs');
const path = require('path');
const svg2ttf = require('svg2ttf');
const SVGIcons2SVGFontStream = require('svgicons2svgfont');

const fontStream = new SVGIcons2SVGFontStream({
    fontName: 'spectrum-workflow'
  });


const svgFontPath = path.join(
    'public', 'fonts', 'prueba.svg'
  )
  
const ttfFontPath = path.join(
    'public', 'fonts', 'prueba.ttf'
  )