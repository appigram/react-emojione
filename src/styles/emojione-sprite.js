import positions from './emojione-sprite-positions';

const defaults = codepoint => ({
    textIndent: '-9999em',
    imageRendering: 'optimizeQuality',
    fontSize: 'inherit',
    height: 64,
    width: 64,
    top: '-3px',
    position: 'relative',
    display: 'inline-block',
    margin: '0 .15em',
    lineHeight: 'normal',
    verticalAlign: 'middle',
    backgroundImage: 'url("assets/emojione.sprites.png")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: positions[codepoint],
    zoom: '0.35',
    MozTransform: 'scale(0.35)',
    MozTransformOrigin: '0 0'
});

export const sprite = (codepoint, style = {}) => Object.assign({}, defaults(codepoint), style);

export default {
    sprite
};
