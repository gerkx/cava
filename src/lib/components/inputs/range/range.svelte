<script lang='ts'>
    import { setCSSProps } from '$lib/logic/style';
    import type { starletteProps } from '$lib/types';

    import { nanoid } from 'nanoid'
    import RangeHandle from './range-handle.svelte';
    import SliderMap from './slider-map';


    export let accentColor: string | null = null;
    export let focusColor: string | null = null;
    export let trackHeight: string | null = null;
    export let trackOpacity: number | null = null;
    export let handleColor: string | null = null;
    export let handleFocusColor: string | null = null;
    export let handleShape: 'circle' | 'square' = 'circle';
    export let handleSize: string | [string, string] | null = null;
    export let handleSolid: boolean = false;
    export let starletteCSSProps: starletteProps = {};
    export let disabled: boolean = false;
    export let id = nanoid();
    export let label: string | null = null;
    export let min: number = 0;
    export let max: number = 100;
    export let step: number = 1;
    export let value: number | [number, number];

    let comboCSSProps = { ...starletteCSSProps };
    if (accentColor) comboCSSProps = { ...comboCSSProps, ...{ accentColor } }
    if (focusColor) comboCSSProps = { ...comboCSSProps, ...{ focusColor } }
    if (trackHeight) comboCSSProps = { ...comboCSSProps, ...{ trackHeight } }
    if (trackOpacity) comboCSSProps = { ...comboCSSProps, ...{ trackOpacity } }
    if (handleColor) comboCSSProps = { ...comboCSSProps, ...{ handleColor } }
    if (handleFocusColor) comboCSSProps = { ...comboCSSProps, ...{ handleFocusColor } }
    if (handleSize) {
        if (typeof handleSize === 'string') {
            comboCSSProps = { ...comboCSSProps, ...{ handleWidth: handleSize, handleHeight: handleSize } }
        }
        else {
            comboCSSProps = { ...comboCSSProps, ...{ handleWidth: handleSize[0], handleHeight: handleSize[1] } }
        }
    }

    let sliderMap: SliderMap = new SliderMap(value, min, max, step);
    $: {
        sliderMap.min = min;
        sliderMap.max = max;
        sliderMap.step = step;
        value = typeof value === 'number' ? sliderMap.value : sliderMap.values
    }

    const square = handleShape === 'square' ? true : false;

</script>

<div class='wrapper' use:setCSSProps={comboCSSProps} class:disabled >
    {#if label && label.length > 0}
        <label for={id} class:disabled>{label}</label>
    {/if}
    
    <div class='range' id={id}>
        <div class='track'>
            <div class='track-bg'></div>
            <div class="track-fill" style={sliderMap.trackFill} />
            { #if sliderMap.range } 
                <RangeHandle 
                    bind:value={sliderMap.valueA} 
                    solid={handleSolid} 
                    step={sliderMap.calcTrackStep()} 
                    {square} 
                    {disabled} 
                /> 
            { /if }
            <RangeHandle 
                bind:value={sliderMap.valueB} 
                solid={handleSolid} 
                step={sliderMap.calcTrackStep()} 
                {square} 
                {disabled} 
            />
        </div>
    </div>
</div>

<style type='text/scss'>
    @import '../../../scss/inputs.scss';

    .wrapper {
        @include input-sizing;
        --accent-color: var(--color-default);
        --focus-color: var(--primary);
        --handle-color: var(--color-default);
        --handle-fill-color: var(--color-bg);
        --handle-focus-color: var(--primary);
        --handle-height: 1em;
        --handle-width: 1em;
        --handle-opacity: 0.91;
        --handle-opacity--hover: 0.96;
        --handle-opacity--active: 1.0;
        --track-height: max(2px, var(--border-width));
        --track-opacity: 0.5;
        width: 100%;
        display: flex;
        flex-direction: column;
        &.disabled {
            opacity: var(--opacity--disabled);
            filter: saturate(0);
        }
    }

    .range {
        --range-margin: calc(var(--input-height) * 0.5);
        width: 100%;
        height: var(--input-height);
        display: flex;
        align-items: center;
    }

    .track {
        width: 100%;
        height: var(--track-height);
        margin: 0 var(--padding-x);
        
        position: relative;
    }

    .track-fill {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: var(--focus-color);   
    }

    .track-bg {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: var(--accent-color);
        opacity: var(--track-opacity);
    }

    label {
		@include input-label;
	}

</style>