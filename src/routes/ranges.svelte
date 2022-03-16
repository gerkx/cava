<script lang='ts'>
    import Panel from '$lib/components/containers/panel.svelte';
    import Range from '$lib/components/inputs/range/range.svelte';
	import Promote from '$lib/components/icons/Promote.svelte';
    // let val: [number, number] = [20, 40];
    let low = 0;
    let high = 100;
    let val: [number, number] = [25,50];

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
        <Range bind:value={low} step={1} min={-50} max={50} />
        <Range bind:value={high} step={1} min={50} max={150} />
        <Range bind:value={val} step={1} min={low} max={high} />
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