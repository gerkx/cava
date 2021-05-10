<button 
class:block 
class:solid
class:uppercase
class:quiet 
class:pill
disabled={disabled}
>
    {value}
</button>

<script lang="ts">
    export let value:string = '' ;
    export let block:boolean = true;
    export let uppercase:boolean = false;
    export let pill:boolean = false;
    export let color:string = '';
    export let solid:boolean = true;
    export let quiet:boolean = false;
    export let disabled:boolean = false;


    import { onMount } from 'svelte';

    import starlette from 'starlette';

    import { parseColorString } from '../../utils/color/parseColorString'


    onMount(() => {
        console.log('beep')
        // starlette.init();
        starlette.initAs('AEFT', 'gradient', 0);
        console.log(window.getComputedStyle(document.documentElement)
            .getPropertyValue('--tabs-active')
        )
    })
    
    const setCustomProps = (): string => {
        let str:string = '';
        switch (true) {
            case pill:
                str += '--border-rad: var(--border-rad--pill);';
            case solid:
                str += '--color--primary: 239,184,76;';
            case color.length > 0:
                str += `--color--text: ${parseColorString(color)};`
        }
        return str

    }

    const action = (node) => {
        node.style.setProperty('--color--text', '244, 71, 8')
        return {
            destroy() {
                console.log('buh bye')
            }
        }
    }

</script>

<style type="text/scss">
    @import '../_scss/variables/colors';
    @import '../_scss/variables/measurements';



    @font-face {
        font-family: 'Open Sans';
        // src: url('./fonts/Open_Sans/OpenSans-Regular.ttf') format('truetype');
        src: url('fonts/Open_Sans/OpenSans-Regular.ttf') format('truetype');
        font-weight: 400;
    }


    :root {
        --color-bg: rgb(38,38,38);
        --color--primary: #{$color-primary};
    }  






    button {
        // --color--text: var(--color--primary);
        --color--text: var(--tabs-active);
        --color--accent: var(--color--primary);

        --height: #{$input-height};
        --padding-x: #{$btn--padding-x};

        --border-rad--std: #{$input-border-rad--std};
        --border-rad--pill: #{$input-border-rad--pill};
        --border-rad: var(--border-rad--std);

        --border-width: .1rem;
        --border-opacity--std: 0.65;

        --opacity--disabled: 0.45;
        --opacity-accent: 0.22;
        --opacity-accent--hover: 0.5;
        --opacity--quiet: .15;
        --opacity--quiet--hover: .25;


        font-family: 'Open Sans', sans-serif;
        font-size: 0.8rem;
        color: var(--button-color);
        
        box-sizing: border-box;
        
        background-color: var(--button);
        padding: 0rem var(--padding-x);
        border: var(--border-width) solid var(--button-primary-border);
        border-radius: var(--border-rad);
        height: var(--height);
        position: relative;
        z-index: 1;
        &::after {
            content: '';
            box-sizing: border-box;
            border-radius: var(--border-rad);
            // box-shadow: 0 0 2rem 0 var(--button-color);
            border: var(--border-width) solid transparent;
            position: absolute;
            // width: 100%;
            // height: 100%;
            // top: 0;
            // left: 0;
            left: calc(var(--border-width) * -1);
            top: calc(var(--border-width) * -1);
            width: calc(100% + var(--border-width) * 2);
            height: calc(100% + var(--border-width) * 2);
            opacity: var(--opacity-accent);
            z-index: 0;
            transition: opacity .23s cubic-bezier(.58,.19,.22,1);
        }
        &:hover::after {
            opacity: var(--opacity-accent--hover);
        }
        &:disabled {
            color: rgba(125,125,125, var(--opacity--disabled));
            border: var(--border-width) solid rgba(125,125,125, var(--opacity--disabled));
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
            content: '';
            // width: 100%;
            // height: 100%;
            // position: absolute;
            // top: 0;
            // left: 0;
            border-radius: calc(var(--height)/2);
        }
    }

    .solid:not(.quiet) {
        // background-color: transparent;
        background-color: var(--button-filled);
        border-color: transparent;
        &::after {
            box-shadow: none;
            border: var(--border-width ) solid var(--button-color);
            // opacity: 0;
            // z-index: 1;
            // transition: opacity .23s cubic-bezier(.58,.19,.22,1);
            // box-shadow: 0 0 2rem 0 var(--button-filled-active);
            &:disabled {
                box-shadow: none;
            }
        // &:hover::after {
        //     opacity: var(--opacity-accent--hover);
        // }
            // border: var(--border-width) solid --button-filled;
            // background-color: greenyellow;
            // z-index: 5;
            // opacity: .2;
            // left: calc(var(--border-width) * -1);
            // top: calc(var(--border-width) * -1);
            // width: calc(100% + var(--border-width) * 2);
            // height: calc(100% + var(--border-width) * 2);
        }
        // color: var(--color-bg);
        &:disabled {
            // border: var(--border-width) transparent;
            background-color: rgba(125,125,125, .45); 
        }
    }

    .quiet {
        border-color: transparent;
        &:disabled {
            background-color: rgba(128,128,128,0.1);
            border-color: transparent;
            &::after {
                opacity: 0;
            }
        }
        &::after {
            content: '';
            // width: 100%;
            // height: 100%;
            box-shadow: none;
            // position: absolute;
            // top: 0;
            // left: 0;
            opacity: var(--opacity--quiet);
            background-color: var(--button-filled);
            // z-index: 0;
            border-color: transparent;
        }
        &:hover::after {
            opacity: var(--opacity--quiet--hover);
        }

    }

    

</style>


