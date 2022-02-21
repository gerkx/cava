<script lang='ts'>
    import Panel from '$lib/components/containers/panel.svelte';
    import Range from '$lib/components/inputs/range/range.svelte';
	import Promote from '$lib/components/icons/Promote.svelte';
    let val = 0.5;
</script>

<div class='section'>
    {val}
    <Panel>
        <Range bind:value={val} />
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