<button 
class:block 
class:solid
class:uppercase
class:quiet 
class:pill
class:active
class={_class}
disabled={disabled}
style={customCSSVars}
>
    {value}
    <!-- <div class='icon'>&#xF001;</div> -->
    <div class='icon' />
</button>

<script lang="ts">
    import { onMount } from 'svelte';
    import { parseColorString } from '../../utils/color/parseColorString';
    import type { 
        buttonAccentKey, 
        buttonFontKey, 
        buttonScaleKey,
        buttonSize, 
        buttonVariant,
    } from '../../typings';
    import { genCssPropStr } from '../../utils/style/cssVarUtils';
    
    ///////////
    // PROPS //
    ///////////
    let _class:string= '';
    export {_class as class}

    export let active:boolean = false;
    export let block:boolean = false;
    export let accentColor:string = '';
    export let fontColor:string = '';
    export let disabled:boolean = false;
    export let pill:boolean = false;
    export let size:buttonSize = null;
    export let uppercase:boolean = false;
    export let value:string = '' ;
    export let variant:buttonVariant = null;
    
    let quiet:boolean = false;
    let solid:boolean = false;


    $: customCSSVars = setCustomCSSVars();
    
    onMount(() => {
        console.log(variant)
        switch (variant) {
            case 'quiet':
                quiet = true;
                break;
            case 'solid':
                solid = true;
                break;
        }
    })

    const setCustomCSSVars = (): string => {
        let vals: string[] = [];

        // set custom colours
        switch (true) {
            case accentColor.length > 0:
                const accentColorStr = parseColorString(accentColor);
                if (accentColorStr) {
                    vals.push(genCssPropStr<buttonAccentKey>('--button-primary-border', accentColorStr)) // primary border color
                    vals.push(genCssPropStr<buttonAccentKey>('--button-filled', accentColorStr)) // quiet bg color
                    vals.push(genCssPropStr<buttonAccentKey>('--button-color', accentColorStr)) // solid bg color
                }
            case fontColor.length > 0:
                const fontColorStr = parseColorString(fontColor);
                if (fontColorStr) {
                    vals.push(genCssPropStr<buttonFontKey>('--button-primary-text', fontColorStr)) // primary font color
                    vals.push(genCssPropStr<buttonFontKey>('--button', fontColorStr)) // solid font color
                }
        }
        // adjust scale
        switch (size) {
            case 'xs':
                vals.push(genCssPropStr<buttonScaleKey>('--scale', '0.7')); // multipler for xs is 0.7
                break;
            case 's':
                vals.push(genCssPropStr<buttonScaleKey>('--scale', '0.85')); // multipler for s is 0.85
                break;
            case 'l':
                vals.push(genCssPropStr<buttonScaleKey>('--scale', '1.25')); // multipler for l is 1.25
                break;
            case 'xl':
                vals.push(genCssPropStr<buttonScaleKey>('--scale', '1.6')); // // multipler for xl is 1.6
                break;
        }
        return vals.join(';')
    }

</script>

<style type="text/scss">
    @import '../_scss/input';

    @font-face {
        font-family: 'Open Sans';
        src: url('fonts/Open_Sans/OpenSans-Regular.ttf') format('truetype');
        font-weight: 400;
    }

    @font-face {
        font-family: 'icono';
        src: url('fonts/prueba.ttf') format('truetype');
    }

    .icon {
        box-sizing: border-box;
        font-family: 'icono';
        font-size: 1.25em;
        display: inline-block;
        line-height: 1;
        &::before {
            content: '\F001';
            box-sizing: inherit;
        }
    }

    button {
        --scale: 1;

        --height: calc(var(--scale) * #{$height});

        --padding-x: calc(var(--scale) * #{$padding--x});

        --border-rad--std: calc(var(--scale) * #{$border-rad--std});
        --border-rad--pill: calc(var(--scale) * #{$border-rad--pill});
        --border-rad: var(--border-rad--std);
        --border-width: #{$border--width};

        font-family: 'Open Sans', sans-serif;
        font-size: calc(var(--scale)* #{$font-size});
        color: var(--button-primary-text);
        box-sizing: border-box;
        background-color: transparent;
        padding: 0rem var(--padding-x);
        border: var(--border-width) solid transparent;
        border-radius: var(--border-rad);
        height: var(--height);
        position: relative;
        z-index: 1;
        // line-height: 1.25;
        display: flex;
        align-items: center;
        gap: .25em;
        &::after {
            content: '';
            border-radius: var(--border-rad);
            border: var(--border-width) solid var(--button-primary-border);
            box-sizing: border-box;
            height: calc(100% + var(--border-width) * 2);
            left: calc(var(--border-width) * -1);
            position: absolute;
            top: calc(var(--border-width) * -1);
            opacity: $opacity-border;
            transition: opacity .23s cubic-bezier(.58,.19,.22,1);
            width: calc(100% + var(--border-width) * 2);
            z-index: -1;
        }
        &:hover::after {
            opacity: $opacity-accent--hover;
        }
        &:active::after, &.active::after {
            opacity: $opacity-accent--active;
        }
        &:disabled {
            opacity: $opacity--disabled;
            pointer-events: none;
            &::after {
                box-shadow: none;
                pointer-events: none;
            }
        }
    }

    .block {
        width: 100%;
    }

    .uppercase {
        text-transform: uppercase;
    }
    
    .pill {
        border-radius: calc(var(--height)/2);
        padding-left: calc(var(--padding-x)*1.5);
        padding-right: calc(var(--padding-x)*1.5);
        position: relative;
        &::after {
            border-radius: calc(var(--height)/2);
        }
    }

    .solid {
        border-color: transparent;
        color: var(--button);
        &::after {
            opacity: $opacity-accent;
            background-color: var(--button-color);
            border-color: transparent;
            box-shadow: none;
        }
    }

    .quiet {
        border-color: transparent;
        &::after {
            background-color: var(--button-filled);
            border-color: transparent;
            box-shadow: none;
            opacity: $opacity--quiet;
        }
        &:hover::after {
            opacity: $opacity--quiet--hover;
        }
        &:active::after, &.active::after {
            opacity: $opacity--quiet--active;
        }

    }

    

</style>


