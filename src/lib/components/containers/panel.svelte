<script lang='ts'>
    import { onMount } from 'svelte';
    import starlette from 'starlette';
    import { deriveBrowserTheme, setAdobeThemedColorProps, setCSSProps } from '$lib/logic/style'
    import type { panelCSSProps ,starletteProps, webTheme } from '$lib/types';
    import { colorThemes } from '$lib/logic/style/colorThemes';

    let _class:string= '';
    export { _class as class }
    export let accentColor:string|null = null;
    export let cssProps: panelCSSProps = {};
    export let fontSize:string|null = null;
    export let fontColor:string|null = null;

    export let starletteProps: starletteProps = {};
    export let webTheme: webTheme | null = null;
    
    let comboCSSProps = {...starletteProps, ...cssProps}
    if (accentColor) comboCSSProps = {...comboCSSProps, ...{colorDefault: accentColor}};
    if (fontSize) comboCSSProps = {...comboCSSProps, ...{fontSize: fontSize}};
    if (fontColor) comboCSSProps = {...comboCSSProps, ...{button: fontColor, buttonPrimaryText: fontColor}};

    onMount (() => {
        if (window.__adobe_cep__ && !webTheme) {
            starlette.init();
            setAdobeThemedColorProps(document.documentElement, colorThemes)
        }
        else if (webTheme){
            starlette.initAs(webTheme.appName, webTheme.theme, webTheme.gradientvalue);
            setAdobeThemedColorProps(document.documentElement, colorThemes)
        }
        else {
            const browserTheme = deriveBrowserTheme();
            starlette.initAs('ILST', browserTheme);
            setAdobeThemedColorProps(document.documentElement, colorThemes)
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                const newColorScheme = event.matches ? "darkest" : "lightest";
                starlette.initAs('ILST', newColorScheme);
                setAdobeThemedColorProps(document.documentElement, colorThemes)
            });
        }
    })

</script>

<div 
    class={_class}
    use:setCSSProps={comboCSSProps}
    id='panel'
>
    <slot />
</div>

<style type="text/scss">
    :global(:root) {
        font-family: 'Open Sans';
        src: url('fonts/Open_Sans/OpenSans-Regular.ttf') format('truetype');
        color: var(--color-default);
        font-weight: 400;
        font-size: 13px;
        background-color: var(--color-bg);
        margin: 0;
        width: 100%;
        height: 100%;
    }
    div {
        // borders
        --border-rad: .4em;
        --border-width: .12em;
        --border-top-left-radius: var(--border-rad);
        --border-top-right-radius: var(--border-rad);
        --border-bottom-right-radius: var(--border-rad);
        --border-bottom-left-radius: var(--border-rad);
        
        // height & width
        --input-height: 2em;
        --height: 100%;
        --width: 100%;
        --font-size: 1em;

        // padding
        --padding-x: .5em;
        --padding-y: 0;

        // opacities
        --opacity--disabled: 0.45;
        --opacity-quiet: .2;
        --opacity-quiet--hover: .45;
        --opacity-quiet--active: .65;
        --opacity-silent: 0.0;
        --opacity-silent--hover: 0.15;
        --opacity-silent--active: 0.25;
        --opacity-accent: 0.75;
        --opacity-accent--hover: .93;
        --opacity-accent--active: 1.0;
        --opacity-border: .7;

        // // scalars
        // --input-scale-xs: 0.70;
        // --input-scale-s: 0.85;
        // --input-scale-l: 1.25;
        // --input-scale-xl: 1.60;
        
        // properties
        
        box-sizing: border-box;
        width: var(--width);
        height: var(--height);
        padding: var(--padding-x);
        font-size: var(--font-size);
    }
</style>