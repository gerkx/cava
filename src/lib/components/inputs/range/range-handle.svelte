<script lang='ts'>
    import { createEventDispatcher } from "svelte";
    import { handleDrag } from '$lib/logic/inputs/horizontal-drag';
    
    export let disabled: boolean;
    export let solid: boolean = false;
    export let square: boolean = false;
    export let step: number;
    export let value: number;
    let active: boolean = false;
    let element: HTMLDivElement;

    const dispatch = createEventDispatcher();
    $: {
        if (value < 0) value = 0;
        if (value > 1) value = 1;
    }

    const nudge = (event: KeyboardEvent) => {
        if (document.activeElement === element) {
            switch (true) {
                case event.key ==='ArrowLeft' && !event.shiftKey:
                    event.preventDefault()
                    value -= step;
                    break;
                case event.key === 'ArrowRight' && !event.shiftKey:
                        event.preventDefault()
                        value += step;
                        break;
                case event.key === 'ArrowLeft' && event.shiftKey:
                    event.preventDefault()
                    value -= step*5;
                    break;
                case event.key === 'ArrowRight' && event.shiftKey:
                    event.preventDefault()
                    value += (step * 5);
                    break;
            }
        }
    }

</script>

<div 
    bind:this={element}
    use:handleDrag
    on:drag={ ({ detail: val }) => {
        if (!disabled) value = val
    }}
    on:dragstart={ () => ((active = true), dispatch('active', true)) }
    on:dragend={ () => ((active = false), dispatch('active', false)) }
    on:mousedown = { () => element.focus() }
    on:keydown = { nudge }
    style={`left: ${value * 100}%`}
    class:disabled
    class:solid
    class:square
    tabindex=0
/>
    
<style type='text/scss'>
    div {
        position: absolute;
        top: 50%;
        height: 0;
        width: 0;
        &::after {
            content: '';
            background-color: var(--handle-fill-color);
            // opacity: var(--handle-opacity);
            border-radius: 50%;
            border: 2px solid var(--handle-color);
            box-sizing: border-box;
            height: var(--handle-height);
            width: var(--handle-width);
		    position: absolute;
            transform: translate(-50%, -50%) scale(1);
            // transition: transform 0.24s var(--std-ease);
            // filter: brightness(85%)

        }
        &:hover::after {
            opacity: var(--handle-opacity--hover);
            cursor: pointer;
        }
        &:focus::after {
            border-color: var(--handle-focus-color);
            // background-color: red;
            transform: translate(-50%, -50%) scale(1.04);
            filter: brightness(100%);
            
            
        }
        &.disabled:hover::after {
            cursor: default;
        }
        &.square::after {
            border-radius: 0;
        }
        &.solid {
            &::after {
                background-color: var(--handle-color)
            }
            &:focus::after {
                background-color: var(--handle-focus-color);
            }
        }
    }

</style>