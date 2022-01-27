<script lang='ts'>
    import type { txtInputType } from '$lib/types';
    import { nanoid } from 'nanoid'

    export let label:string|null = null;
    export let placeholder:string|null = null;
    export let type:txtInputType = 'text';

    const id = nanoid();
    
</script>

<div>
    {#if label}
    <label for={id} >{label}</label>
    {/if}
    <input 
        name={label}
        id={id}
        placeholder={placeholder}
        type={type}
    >

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

        padding-top: var(--calc-padding-y);
        padding-bottom: var(--calc-padding-y);
        padding-left: var(--calc-padding-x);
        padding-right: var(--calc-padding-x);

        border: var(--border-width) solid var(--color-default);
        border-radius: var(--calc-border-rad);
        outline: none;
        &:focus {
            border-color: var(--blue-600);
        }
    }
    label {
        display: block;
        padding-left: var(--calc-padding-x);
    }
    


</style>