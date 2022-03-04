<script lang='ts'>
    import RangeHandle from './range-handle.svelte';

    let p: number = .8;

    // export let value;

    export let value: number | [number, number] = 50;
    export let min: number = 0;
    export let max: number = 100;
    export let step: number = 1;

    const range = !(typeof value === 'number') ? true : false;
    let internal_value = value;
    const calcPercentage = (val: number, min: number, max: number): number => {
        return val / (max - min)
    }

    let val_a = range ? value[0] : 0;
    let val_b = typeof value === 'number' ? calcPercentage(value, min, max) : value[1]; 
    let low: number = val_a;
    let high: number = val_b;
    let trackFill: string = `left: ${low * 100}%; right: ${(1 - high) * 100}%;`;

    const calcValue = (percent: number, min: number, max: number): number => {
        return (max - min) * percent
    }
    
    const roundToStep = (value: number, step: number): number => {
        return Math.round(value/step) * step
    }
    
    const calcRelativeStep = (value: number, step: number, min: number, max: number): number => {
        return calcPercentage(roundToStep(value, step), min, max);
    }

    $: {
        if (range) {
            val_a = calcRelativeStep(calcValue(val_a, min, max), step, min, max)
            val_b = calcRelativeStep(calcValue(val_b, min, max), step, min, max)
            low = Math.min(val_a, val_b);
            high = Math.max(val_a, val_b);
            value = [Math.round(low), Math.round(high)];
            console.log
        }
        else {
            console.log(val_b)
            val_b = calcRelativeStep(calcValue(val_b, min, max), step, min, max);
            console.log(val_b)
            high = val_b
            value = Math.round(calcValue(val_b, min, max)) + min;
        }
        trackFill = `left: ${low * 100}%; right: ${(1 - val_b) * 100}%;`
        console.log(trackFill)
        // value = value;
    }
    

</script>

<div class='range'>
    <div class='track'>
        
        <div 
            class="track-fill" 
            style={trackFill}
        />
        { #if range } <RangeHandle bind:value={val_a} /> { /if }
        <RangeHandle bind:value={val_b} />
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