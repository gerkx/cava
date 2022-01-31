<script lang='ts'>
    import { onMount } from 'svelte';
    import type { txtInputType } from '$lib/types';
    import { nanoid } from 'nanoid'

    export let label:string|null = null;
    export let placeholder:string|null = null;
    export let type:txtInputType = 'text';
    export let invalid:boolean = false;
    export let clearable:boolean = false;
    

    import Bell from '$lib/components/icons/Bell.svelte'
    import Close from '$lib/components/icons/Close.svelte'
    import Alert from '$lib/components/icons/Alert.svelte'
    import Btn from '$lib/components/inputs/btn/btn.svelte';

    const id = nanoid();

    let focus:boolean = false;

    const toggleFocus = () => {
        focus = !focus;
    }
    
    let root:HTMLElement;
    let red: 'red'
    
</script>

<div bind:this={root} >
    {#if label && label.length > 0}
    <label for={id} >{label}</label>
    {/if}
    
    <div class='input-wrapper'>
        <div class='input-content' class:focus class:invalid>
            <Bell />
            <input
                name={label}
                id={id}
                placeholder={placeholder}
                type={type}
        
                on:focus={toggleFocus}
                on:blur={toggleFocus}
            >
            {#if clearable}<Btn variant='silent'> <Close /> </Btn> {/if}
        </div>
        {#if invalid}
            <span class='alert'>
                <Alert size='l' />
            </span>
        {/if}
        <div class='message' class:invalid>
            message
        </div>
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
    }

    input:not([type=submit]):not([type=file]) {
        // properties
        font-family: 'Open Sans', sans-serif;
        font-size: var(--calc-font-size);
        color: var(--button-primary-text);
        box-sizing: border-box;
        background-color: transparent;
        display: block;
        width: var(--width);
        height: var(--calc-height);

        // padding-top: var(--calc-padding-y);
        // padding-bottom: var(--calc-padding-y);
        // padding-left: var(--calc-padding-x);
        // padding-right: var(--calc-padding-x);

        border: var(--border-width) solid transparent;
        // border-radius: var(--calc-border-rad);
        outline: none;
        // &:focus {
        //     border-color: var(--blue-600);
        // }
        // &.invalid {
        //     border-color: var(--red-500);
        // }
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
            border-color: var(--red-500);
        }   
        &.focus:not(.invalid) {
            border-color: var(--blue-500);
        }
    }

    .input-wrapper {
        display: flex;
        align-items: center;
        gap: .5em;
        position: relative;
    }

    .alert {
        color: var(--red-500);
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

</style>