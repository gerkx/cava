<script lang='ts'>
    import { createEventDispatcher } from "svelte";
    import { handleDrag } from '$lib/logic/inputs/horizontal-drag';
    
    export let pos: number;
    let active: boolean = false;
    const dispatch = createEventDispatcher();

</script>

<div 
    use:handleDrag
    on:drag={ ({ detail: val }) => pos = val }
    on:dragstart={ () => ((active = true), dispatch('active', true)) }
    on:dragend={ () => ((active = false), dispatch('active', false)) }
    style={`left: ${pos * 100}%`}
/>
    
<style type='text/scss'>
    div {
        position: absolute;
        top: 50%;
        height: 0;
        width: 0;
        &::after {
            content: '';
            background-color: var(--error);
            border-radius: 50%;
            box-sizing: border-box;
            height: 1em;
            width: 1em;
		    position: absolute;
            transform: translate(-50%, -50%)
        }
    }

</style>