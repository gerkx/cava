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

export const handleDrag = (node: Element) => {
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