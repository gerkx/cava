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
    export let block:boolean = false;
    export let color:string = '';
    export let disabled:boolean = false;
    export let pill:boolean = false;
    export let quiet:boolean = false;
    export let solid:boolean = true;
    export let uppercase:boolean = false;
    export let value:string = '' ;


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
        --opacity-accent: 0.65;
        --opacity-accent--hover: .85;
        --opacity-accent--active: 1.0;
        --opacity--quiet: .15;
        --opacity--quiet--hover: .45;
        --opacity--quiet--active: .65;


        font-family: 'Open Sans', sans-serif;
        font-size: 0.8rem;
        color: var(--button-color);
        
        box-sizing: border-box;
        
        background-color: var(--button);
        padding: 0rem var(--padding-x);
        border: var(--border-width) solid transparent;
        border-radius: var(--border-rad);
        height: var(--height);
        position: relative;
        z-index: 1;
        &::after {
            content: '';
            position: absolute;
            left: calc(var(--border-width) * -1);
            top: calc(var(--border-width) * -1);
            width: calc(100% + var(--border-width) * 2);
            height: calc(100% + var(--border-width) * 2);
            box-sizing: border-box;
            border-radius: var(--border-rad);
            border: var(--border-width) solid var(--button-primary-border);
            opacity: var(--opacity-accent);
            transition: opacity .23s cubic-bezier(.58,.19,.22,1);
            z-index: -1;
        }
        &:hover::after {
            opacity: var(--opacity-accent--hover);
        }
        &:active::after {
            opacity: var(--opacity-accent--active);
        }
        &:disabled {
            opacity: var(--opacity--disabled);
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
        color: var(--button);
        border-color: transparent;
        &::after {
            background-color: var(--button-color);
            border-color: transparent;
            box-shadow: none;
        }
        &:disabled::after {
            border-color: transparent;
        }
    }

    .quiet {
        border-color: transparent;
        &::after {
            box-shadow: none;
            opacity: var(--opacity--quiet);
            background-color: var(--button-filled);
            border-color: transparent;
        }
        &:hover::after {
            opacity: var(--opacity--quiet--hover);
        }
        &:active::after {
            opacity: var(--opacity--quiet--active);
        }

    }

    

</style>


