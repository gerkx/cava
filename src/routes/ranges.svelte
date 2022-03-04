<script lang='ts'>
    import Panel from '$lib/components/containers/panel.svelte';
    import Range from '$lib/components/inputs/range/range.svelte';
	import Promote from '$lib/components/icons/Promote.svelte';
    // let val: [number, number] = [20, 40];
    let val: 70;

    let history = [
        'start',
        'progress',
        'mistake',
        'save'
    ]
    let current;
    // $: current = history[val]
</script>

{val}
<div class='section'>
    <Panel>
        <Range bind:value={val} step={1} min={10} max={100} />
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