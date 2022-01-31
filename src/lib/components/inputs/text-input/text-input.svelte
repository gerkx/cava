<script lang='ts'>
    import type { panelCSSProps, starletteProps, txtInputType } from '$lib/types';
    import { nanoid } from 'nanoid';
    import { setCSSProps } from '$lib/logic/style'

    import Btn from '$lib/components/inputs/btn/btn.svelte';
    import Close from '$lib/components/icons/Close.svelte';
    import Alert from '$lib/components/icons/Alert.svelte';
    import Visibility from '$lib/components/icons/Visibility.svelte';
    import VisibilityOff from '$lib/components/icons/VisibilityOff.svelte'

    export let accentColor:string|null = null;
    export let clearable:boolean = false;
    export let cssProps: panelCSSProps = {};
    export let focusColor:string|null = null;
    export let fontColor:string|null = null;
    export let invalid:boolean = false;
    export let label:string|null = null;
    export let message:string|null = null;
    export let placeholder:string|null = null;
    export let starletteCSSProps: starletteProps = {};
    export let type:txtInputType = 'text';
    export let value:string = '';

    const id = nanoid();
    let focus:boolean = false;
    let passwordVisible:boolean = false;
    let reactiveType:txtInputType = type;
    let comboCSSProps = {...starletteCSSProps, ...cssProps};
    if (accentColor) comboCSSProps = {...comboCSSProps, ...{colorDefault: accentColor}};
    if (focusColor) comboCSSProps = {...comboCSSProps, ...{focusColor: focusColor}};
    if (fontColor) comboCSSProps = {...comboCSSProps, ...{buttonPrimaryText: fontColor}};

    const toggleFocus = () => focus = !focus;
    const togglePasswordVisibility = () => passwordVisible = !passwordVisible;
    const clearValue = () => value = '';

    // https://stackoverflow.com/questions/57392773/error-type-attribute-cannot-be-dynamic-if-input-uses-two-way-binding
    const handleInput = e => {
        value = type.match(/^(number|range)$/)
            ? +e.target.value
            : e.target.value;
    };
    
    $: {
        if (type === 'password') {
            if (passwordVisible) {
                reactiveType = 'text';
            }
            else {
                reactiveType = 'password'
            }
        }
    }
    
</script>

<div >
    {#if label && label.length > 0}
    <label for={id} >{label}</label>
    {/if}
    
    <div class='input-wrapper'>
        {#if $$slots.prepend}
            <div class='append'><slot name='prepend' /></div>
        {/if}
        <div class='input-content' class:focus class:invalid use:setCSSProps={comboCSSProps}>
            {#if $$slots.prependInner}
                <slot name='prependInner' />
            {/if}
            <input
                name={label}
                id={id}
                placeholder={placeholder}
                type={reactiveType}
                value={value}
                on:input={handleInput}
                on:focus={toggleFocus}
                on:blur={toggleFocus}
            >
            {#if clearable || type === 'password' || $$slots.appendInner}
                <div class='append-inner'>
                    {#if clearable}<Btn variant='silent' on:click={clearValue}> <Close /> </Btn> {/if}
                    {#if type === 'password'} 
                        <Btn variant='silent' on:click={togglePasswordVisibility}>
                            {#if passwordVisible}
                                <VisibilityOff size='l'/> 
                            {:else}
                                <Visibility size='l'/> 
                            {/if}
                        </Btn>
                    {/if}
                    <slot name='appendInner' />
                </div>
            {/if}
        </div>
        {#if invalid || $$slots.append }
            <slot name='append' />
            {#if invalid}<span class='alert'><Alert size='l' /></span>{/if}
        {/if}
        {#if message && message.length > 1}
        <div class='message' class:invalid>
            {message}
        </div>
        {/if}
    </div>
</div>


<style type='text/scss'>
    div {
        // sizes
        --width: auto;
        --scale: 1.0;
        --font-size: 1em;
        --custom-font-size: 1em;
        --calc-font-size: calc(var(--scale)* var(--font-size));
        --calc-border-rad:
            calc(var(--scale) * var(--border-top-left-radius)) 
            calc(var(--scale) * var(--border-top-right-radius)) 
            calc(var(--scale) * var(--border-bottom-right-radius)) 
            calc(var(--scale) * var(--border-bottom-left-radius));
        --calc-height: calc(var(--scale) * var(--input-height));
        --calc-padding-x: calc(var(--scale) * var(--padding-x));
        --calc-padding-y: calc(var(--scale) * var(--padding-y));
        --focus-color: var(--primary);
    }

    input:not([type=submit]):not([type=file]) {
        font-family: 'Open Sans', sans-serif;
        font-size: var(--calc-font-size);
        color: var(--button-primary-text);
        box-sizing: border-box;
        background-color: transparent;
        display: block;
        width: var(--width);
        height: var(--calc-height);
        border: var(--border-width) solid transparent;
        outline: none;
    }
    label {
        display: block;
        padding-left: var(--calc-padding-x);
    }
    
    .input-content {
        display: flex;
        align-items: center;
        border: var(--border-width) solid var(--color-default);
        border-radius: var(--calc-border-rad);
        padding-top: var(--calc-padding-y);
        padding-bottom: var(--calc-padding-y);
        padding-left: var(--calc-padding-x);
        padding-right: var(--calc-padding-x);
        &.invalid {
            border-color: var(--error);
        }   
        &.focus:not(.invalid) {
            border-color: var(--focus-color);
        }
    }

    .input-wrapper {
        display: flex;
        align-items: center;
        gap: .5em;
        position: relative;
    }

    .alert {
        color: var(--error);
        height: var(--input-height);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .message {
        padding-left: var(--calc-padding-x);
        position: absolute;
        top: 100%;
        font-size: .85em;
        &.invalid {
            color: var(--error);
        }
    }

    .append-inner {
        display: flex;
        align-items: center;
    }

    .append {
        height: var(--input-height);
        display: flex;
        align-items: center;
    }

</style>