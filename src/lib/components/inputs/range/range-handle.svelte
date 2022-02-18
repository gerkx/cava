<script lang='ts'>
import { createEventDispatcher } from "svelte";



    const handleMove = (node: Element) => {
        const track = node.parentElement;
        return (event: MouseEvent | TouchEvent) => {
            const { left, width } = track.getBoundingClientRect();
            const clickOffset = 'touches' in event 
                ? event.touches[0].clientX 
                : event.clientX;
            const clickPos = Math.min(Math.max((clickOffset - left) / width, 0), 1) || 0;
            node.dispatchEvent(new CustomEvent('drag', { detail: clickPos })) 
        }
    }

    const handleMouseDown = (node: Element) => {
        const move = handleMove(node);
        return (event: MouseEvent | TouchEvent) => {
            event.preventDefault();
            node.dispatchEvent(new CustomEvent('dragstart'))

            
            const moveEvent = 'touches' in event ? 'touchmove' : 'mousemove';
            const upEvent = 'touches' in event ? 'touchend' : 'mouseup';
            
            const handleUp = (event: MouseEvent | TouchEvent) => {
                event.stopPropagation();
                document.removeEventListener(moveEvent, move);
                document.removeEventListener(upEvent, handleUp);
                node.dispatchEvent(new CustomEvent("dragend"));
            }
            
            document.addEventListener(moveEvent, move);
            document.addEventListener(upEvent, handleUp);
        }
    }

    const handle = (node: Element) => {
        const down = handleMouseDown(node);
        node.addEventListener('touchstart', down);
        node.addEventListener('mousedown', down);
        return {
            destroy() {
                node.removeEventListener('touchstart', down);
                node.removeEventListener('mousedown', down);
            }
        }
    }
    
    export let pos: number;
    let active: boolean = false;
    const dispatch = createEventDispatcher();

</script>

<div 
    use:handle
    on:drag={ ({ detail: v }) => pos = v }
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