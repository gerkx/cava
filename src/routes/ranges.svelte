<script lang='ts'>
    import Panel from '$lib/components/containers/panel.svelte';
    import Range from '$lib/components/inputs/range/range.svelte';
	import Promote from '$lib/components/icons/Promote.svelte';
    // let val: [number, number] = [20, 40];
    let low = 0;
    let high = 100;
    let val: [number, number] = [25,50];
    let iconVal = 25;

    let history = [
        'start',
        'progress',
        'mistake',
        'save'
    ]
    let current;
    // $: current = history[val]
</script>
<div class='section'>
    value: {val} ... min: {low} ... max: {high}
    <Panel>
        <Range bind:value={low} step={1} min={-50} max={50}  handleSolid />
        <Range bind:value={high} step={1} min={50} max={150} />
        <Range bind:value={val} step={2} min={low} max={high} label='range slider' handleFocusColor='#eb00b8' trackOpacity={0.2} trackHeight='2em' handleSize={['1em', '2.25em']} handleShape='square'/>
    </Panel>
</div>
<div class="section">
    <Panel>
        <Range label={iconVal.toString()} bind:value={iconVal} trackHeight='3px' >
            <Promote size='s' slot='prepend' />
            <Promote size='l' slot='append' />
        </Range>
    </Panel>
</div>

<style type='text/scss'>
    .section {
        width: 35%;
        display: flex;
        gap: .5em;
        flex-wrap: wrap;
        align-items: center;
        border: 1px solid red;
        &:not(:first-child  ){
            padding-top: 2.5em;
        }
    }
</style>