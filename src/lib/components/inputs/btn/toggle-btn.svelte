<script lang='ts'>
    import { getContext } from 'svelte';
    import type { 
        buttonVariant, 
        inputSize, 
        panelCSSProps,
        starletteProps, 
    } from '$lib/types';
    import Btn from './btn.svelte';
    import { BUTTON_GROUP } from './toggle-group.svelte';
    const {toggleClick, selected} = getContext(BUTTON_GROUP);

    export let accentColor:string|null = null;
    export let activeVariant:buttonVariant = 'solid';
    export let cssProps: panelCSSProps = {};
    export let fontColor:string|null = null;
    export let fontSize:string|null = null;
    export let inactiveVariant:buttonVariant = null;
    export let key:string;
    export let size:inputSize = null;
    export let starletteCSSProps: starletteProps = {};
    export let uppercase:boolean = false;

    let variant:buttonVariant = 'quiet';
    $:{ 
        variant = $selected.includes(key) ? activeVariant : inactiveVariant
        // variant = $selected.includes(key) ? 'solid' : 'quiet'
    }
      


</script>

<Btn 
    accentColor={accentColor}
    cssProps={cssProps}
    fontColor={fontColor}
    fontSize={fontSize}
    size={size}
    starletteCSSProps={starletteCSSProps}
    uppercase={uppercase}
    variant={variant} 
    on:click={ () => toggleClick(key) }
>
    <slot />
</Btn>


