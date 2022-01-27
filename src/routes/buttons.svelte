<script lang='ts'>
    import Panel from '$lib/components/containers/panel.svelte'
    import Btn from '$lib/components/inputs/btn/btn.svelte'
    import ToggleGroup from '$lib/components/inputs/btn/toggle-group.svelte';
    import ToggleBtn from '$lib/components/inputs/btn/toggle-btn.svelte';
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

    let model:string[] = [];
</script>

<Panel>
    <div class='button-section'>
        <Btn> Standard Button </Btn>
        <Btn variant='quiet'> Quiet Button </Btn>
        <Btn variant='silent'> Silent Button </Btn>
        <Btn variant='solid'> Solid Button </Btn>
        <Btn uppercase> Uppercased Button </Btn>
        <Btn pill> Pill Button </Btn>        
        <Btn block> Block Button </Btn>
    </div>
    <div class='button-section'>
        <Btn active> Active Button </Btn>
        <Btn active variant='quiet'> Active Quiet Button </Btn>
        <Btn active variant='silent'> Active Silent Button </Btn>
        <Btn active variant='solid'> Active Solid Button </Btn>
    </div>
    <div class='button-section'>
        <Btn disabled> Disabled Button </Btn>
        <Btn disabled variant='quiet'> Disabled Quiet Button </Btn>
        <Btn disabled variant='silent'> Disabled Silent Button </Btn>
        <Btn disabled variant='solid'> Disabled Solid Button </Btn>
    </div>
    <div class='button-section'>
        <Btn accentColor='orange'> accentColor Button </Btn>
        <Btn accentColor='orange' variant='quiet'> Quiet accentColor Button </Btn>
        <Btn accentColor='orange' variant='silent'> Silent accentColor Button </Btn>
        <Btn accentColor='orange' variant='solid'> Solid accentColor Button </Btn>
    </div>
    <div class='button-section'>
        <Btn fontColor='#37ad6b'> fontColor Button </Btn>
        <Btn fontColor='#37ad6b' variant='quiet'> Quiet fontColor Button </Btn>
        <Btn fontColor='#37ad6b' variant='silent'> Silent fontColor Button </Btn>
        <Btn fontColor='#37ad6b' variant='solid'> Solid fontColor Button </Btn>
    </div>
    <div class='button-section'>
        <Btn size='xs'> XS Button </Btn>
        <Btn size='s'> S Button </Btn>
        <Btn size='l'> L Button </Btn>
        <Btn size='xl'> XL Button </Btn>
    </div>
    <div class='button-section'>
        <Btn fontSize='2em'> fontSize=2em Button </Btn>
        <Btn fontSize='0.5em'> fontSize=0.5em Button </Btn>
    </div>
    <div class='button-section'>
       <ToggleGroup bind:model={model} required>
           <ToggleBtn activeVariant='solid' inactiveVariant='silent' key='A'>A</ToggleBtn>
           <ToggleBtn accentColor='purple' inactiveVariant='quiet' key='B'>B</ToggleBtn>
           <ToggleBtn size='s' key='C'>C</ToggleBtn>
       </ToggleGroup>
    </div>
</Panel>

<style type='text/scss'>
    .button-section {
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