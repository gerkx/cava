const fs = require('fs');
const path = require('path');
const svg2ttf = require('svg2ttf');
const SVGIcons2SVGFontStream = require('svgicons2svgfont');



const fontStream = new SVGIcons2SVGFontStream({
  fontName: 'spectrum-workflow'
});


const rootDir = path.dirname(require.main.filename);

const svgFontPath = path.join(
  'public', 'fonts', 'prueba.svg'
)

const ttfFontPath = path.join(
  'public', 'fonts', 'prueba.ttf'
)

const spectrumWorkflowModPath = path.join(
  'node_modules', '@adobe', 'spectrum-css-workflow-icons','dist', '24'
)


// Setting the font destination
fontStream.pipe(fs.createWriteStream(svgFontPath))
  .on('finish',function() {
    console.log('Font successfully created!')
  })
  .on('error',function(err) {
    console.error(err);
  });

// Writing glyphs
const glyph1 = fs.createReadStream(path.join(
    'node_modules', '@adobe', 'spectrum-css-workflow-icons','dist', '24', 'Alert.svg'
));
glyph1.metadata = {
    unicode: ['\uF001'],
    name: 'alert'
};
const glyph2 = fs.createReadStream(path.join(
    'node_modules', '@adobe', 'spectrum-css-workflow-icons','dist', '24', 'Redo.svg'
));
glyph2.metadata = {
    unicode: ['\uF002'],
    name: 'redo'
};

fontStream.write(glyph1);

fontStream.end();


const ttf = svg2ttf(fs.readFileSync(svgFontPath, 'utf8'), {});

fs.writeFileSync(ttfFontPath, Buffer.from(ttf.buffer));