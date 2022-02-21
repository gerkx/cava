<script lang='ts'>
    import RangeHandle from './range-handle.svelte';

    let p: number = .8;

    // export let value;

    export let value: number | [number, number] = .8;
    const range = !(typeof value === 'number') ? true : false;
    let internal_value = value;

    let val_a = range ? value[0] : 0;
    let val_b = range ? value[1] : value; 
    let low: number = val_a;
    let high: number = val_b;
    let focus: string = `left: ${low * 100}%; right: ${(1 - high) * 100}%;`;


    $: {
        if (range) {
            low = Math.min(val_a, val_b);
            high = Math.max(val_a, val_b);
            value = [low, high];
        }
        else {
            high = val_b
            value = high;
        }
        focus = `left: ${low * 100}%; right: ${(1 - high) * 100}%;`
        // value = value;
    }
    

</script>

<div class='range'>
    <div class='track'>
        
        <div 
            class="track-fill" 
            style={focus}
        />
        { #if range } <RangeHandle bind:pos={val_a} /> { /if }
        <RangeHandle bind:pos={val_b} />
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
        // height: calc(var(--border-width) * 1);
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
        transform: scaleY(2);
    }

</style>