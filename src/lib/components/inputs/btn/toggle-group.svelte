<script context='module'>
	export const BUTTON_GROUP = {};
</script>

<script lang='ts'>
    import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

    export let multiple:boolean = false;
    export let required:boolean = false;
    export let column:boolean = false;
    
    export let model:string[];
    const selected = writable(model)
    $: selected.set(model)

    setContext(BUTTON_GROUP, {
        toggleClick: (key:string) => {
            if (model.includes(key)) {
                if(!(required && model.length === 1)) {
                    model.splice(model.indexOf(key), 1);
                    model = model
                }
            }
            else if (multiple) {
                model = [...model, key]
            }
            else {
                model = [key]
            }
        },
        selected
    })
</script>

<div role='group' class:column>
    <slot />
</div>

<style type='text/scss'>
    div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: .25em;
        &.column {
            flex-direction: column;
        }
    }
</style>