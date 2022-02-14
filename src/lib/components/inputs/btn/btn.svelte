<script lang='ts'>
    import { createEventDispatcher } from 'svelte';
    import type {starletteProps, panelCSSProps, inputSize, buttonVariant} from '$lib/types';
    import { INPUT_SIZE_MAP } from '$lib/logic/inputs';
    import { setCSSProps } from '$lib/logic/style'

    let _class:string= '';
    export {_class as class}
    export let accentColor:string|null = null;
    export let active:boolean = false;
    export let block:boolean = false;
    export let cssProps: panelCSSProps = {};
    export let disabled:boolean = false;
    export let fontColor:string|null = null;
    export let fontSize:string|null = null;
    export let pill:boolean = false;
    export let size:inputSize = null;
    export let starletteCSSProps: starletteProps = {};
    export let tabindex:number|null = null;
    export let uppercase:boolean = false;
    export let variant:buttonVariant = null;

    let comboCSSProps = {...starletteCSSProps, ...cssProps}
    if (size && Object.keys(INPUT_SIZE_MAP).includes(size)) {
        comboCSSProps = {...comboCSSProps, ...{scale:INPUT_SIZE_MAP[size]}}
    }
    if (accentColor) comboCSSProps = {...comboCSSProps, ...{colorDefault: accentColor}};
    if (fontSize) comboCSSProps = {...comboCSSProps, ...{customFontSize: fontSize}};
    if (fontColor) comboCSSProps = {...comboCSSProps, ...{button: fontColor, buttonPrimaryText: fontColor}};

    let quiet:boolean = false;
    let silent:boolean = false;
    let solid:boolean = false;
    $: {
        switch (variant) {
            case 'quiet':
                quiet = true;
                silent = false;
                solid = false;
                break;
            case 'silent':
                quiet = false;
                silent = true;
                solid = false;
                break;
            case 'solid':
                quiet = false;
                silent = false;
                solid = true;
                break;
            default:
                solid=false;
                quiet=false;
                silent=false;
        }
    }

    const dispatch = createEventDispatcher();

</script>

<button
    class={_class}
    class:active
    class:block
    class:pill
    class:quiet
    class:silent
    class:solid
    class:uppercase
    disabled={disabled}
    tabindex={tabindex}
    use:setCSSProps={comboCSSProps}
    on:click={() => dispatch('click')}
>   {#if fontSize}
        <span class='custom-font-size'>
            <slot />
        </span>
    {:else}
        <slot />
    {/if}
</button>

<style type='text/scss'>
    @import '../../../scss/inputs.scss';

    button {
        @include input-sizing;

        // layout
        --justify-content: center;
        --align-items: center;
        --gap: .25rem;
    
        
        // properties
        @include input-typography;
        box-sizing: border-box;
        background-color: transparent;

        border: var(--border-width) solid transparent;
        border-radius: var(--calc-border-rad);

        width: var(--width);
        height: var(--calc-height);

        padding-top: var(--calc-padding-y);
        padding-bottom: var(--calc-padding-y);
        padding-left: var(--calc-padding-x);
        padding-right: var(--calc-padding-x);
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: var(--justify-content);
        align-items: var(--align-items);
        gap: var(--gap);

        &::after {
            content: '';
            box-sizing: border-box;
            border: var(--border-width) solid var(--color-default);
            border-radius: var(--calc-border-rad);
            height: calc(100% + var(--border-width) * 2);
            width: calc(100% + var(--border-width) * 2);
            position: absolute;
            left: calc(var(--border-width) * -1);
            top: calc(var(--border-width) * -1);
            z-index: -1;
            opacity: var(--opacity-border);
            transition: opacity .23s var(--std-ease);
        }
        &:hover::after {
            opacity: var(--opacity-accent--hover);
        }
        &:active::after, &.active::after {
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
    
    .custom-font-size {
            font-size: var(--custom-font-size);
        }

    .pill {
        border-radius: calc(var(--calc-height)/2);
        padding-left: calc(var(--calc-padding-x)*1.5);
        padding-right: calc(var(--calc-padding-x)*1.5);
        position: relative;
        &::after {
            border-radius: calc(var(--calc-height)/2);
        }
    }

    .quiet {
        border-color: transparent;
        &::after {
            background-color: var(--color-default);
            border-color: transparent;
            box-shadow: none;
            opacity: var(--opacity-quiet);
        }
        &:hover::after {
            opacity: var(--opacity-quiet--hover);
        }
        &:active::after, &.active::after {
            opacity: var(--opacity-quiet--active);
        }
    }
    
    .silent {
        border-color: transparent;
        &::after {
            background-color: var(--color-default);
            border-color: transparent;
            box-shadow: none;
            opacity: var(--opacity-silent);
        }
        &:hover::after {
            opacity: var(--opacity-silent--hover);
        }
        &:active::after, &.active::after {
            opacity: var(--opacity-silent--active);
        }
    }

    .solid {
        border-color: transparent;
        color: var(--button);
        &::after {
            opacity: var(--opacity-accent);
            background-color: var(--color-default);
            border-color: transparent;
            box-shadow: none;
        }
    }

    .uppercase {
        text-transform: uppercase;
    }

</style>