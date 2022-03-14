<script lang='ts'>
    import RangeHandle from './range-handle.svelte';
    import SliderMap from './slider-map';

    export let value: number | [number, number];
    export let min: number = 0;
    export let max: number = 100;
    export let step: number = 1;

    let sliderMap: SliderMap = new SliderMap(value, min, max, step);
    $: {
        sliderMap.min = min;
        sliderMap.max = max;
        sliderMap.step = step;
        value = typeof value === 'number' ? sliderMap.value : sliderMap.values
    }

</script>

<div class='range'>
    <div class='track'>
        
        <div 
            class="track-fill" 
            style={sliderMap.trackFill}
        />
        { #if sliderMap.range } <RangeHandle bind:value={sliderMap.valueA} /> { /if }
        <RangeHandle bind:value={sliderMap.valueB} />
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