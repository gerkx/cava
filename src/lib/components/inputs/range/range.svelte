<script lang='ts'>
    import RangeHandle from './range-handle.svelte';

    const handleDrag = (node: Element) => {
        let x: number;
        let y: number;
        const handleMouseDown = (event) => {
            if (event.type === 'touchstart') event = event.touches[0];
            
            x = event.clientX;
            y = event.clientY;

            node.dispatchEvent(new CustomEvent('dragStart', {
                detail: { x, y }
            }));
        }
    }

    let p: number;

</script>

<div class='range'>
    <div class='track'>
        <div 
            class="track-fill" 
            style="
                right: 20%;
                left: 20%;
            "
        />
        <RangeHandle pos={p} />
    
    </div>
</div>
<!-- <input type="range" name="" id="" /> -->

<style type='text/scss'>
    .range {
        --range-margin: calc(var(--input-height) * 0.5);
        width: 100%;
        height: var(--input-height);
        display: flex;
        align-items: center;
        // padding: var(--padding-x);
        // margin: var(--range-margin) 0;

    }

    .track {
        width: 100%;
        height: calc(var(--border-width) * 0.5);
        background-color: var(--color-default);
        margin: 0 var(--padding-x);
        position: relative;
    }

    .track-fill {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: var(--primary);   
    }

</style>