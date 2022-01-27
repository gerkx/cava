<script lang='ts'>
    import Panel from '$lib/components/containers/panel.svelte'
    import Btn from '$lib/components/inputs/btn/btn.svelte'
    import type { panelCSSProps, starletteProps} from '$lib/types'
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
</script>

<Panel>
    <Btn
        cssProps={cssProps}
        starletteCSSProps={starletteProps}
    >
        <span>Hola</span>
        <span>Hello</span>
    
    </Btn>
    <div>
        <h1>Welcome to SvelteKit</h1>
    </div>
    <div>
        <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    </div>
</Panel>
