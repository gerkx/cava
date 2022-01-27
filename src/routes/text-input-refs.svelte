<script lang='ts'>
    import Panel from '$lib/components/containers/panel.svelte'
    import Btn from '$lib/components/inputs/btn/btn.svelte'
    import TextInput from '$lib/components/inputs/text-input/text-input.svelte'
    import ToggleGroup from '$lib/components/inputs/btn/toggle-group.svelte';
    import ToggleBtn from '$lib/components/inputs/btn/toggle-btn.svelte';
    import type { panelCSSProps, starletteProps, webTheme} from '$lib/types';

    const manualTheme:webTheme = {
        appName:'AEFT',
        theme:'gradient',
        gradientvalue: 0
    }
    const cssProps:panelCSSProps = {
        // paddingY: '3.5em',
        // width: '20%',
        // inputHeight: '4em',
        // borderTopLeftRadius: '0em'
        // fontSize:'2em',
        // justifyContent: 'start',
        // alignItems: 'end'


    
    }
    const starletteProps:starletteProps = {
        // buttonPrimaryText: 'red'
    }

    let model:string[] = [];
</script>

<Panel>
    <div class='section'>
        <TextInput 
            label='standard text input'
        />
        <TextInput 
            label='with a placeholder'
            placeholder='beep bop boop'
        />
    </div>
</Panel>

<style type='text/scss'>
    .section {
        width: 100%;
        display: flex;
        gap: .5em;
        flex-wrap: wrap;
        align-items: center;
        &:not(:first-child  ){
            padding-top: .5em;
        }
    }
</style>