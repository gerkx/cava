<script lang='ts'>
    import Panel from '$lib/components/containers/panel.svelte'
    import Btn from '$lib/components/inputs/btn/btn.svelte'
    import TextInput from '$lib/components/inputs/text-input/text-input.svelte'
    import ToggleGroup from '$lib/components/inputs/btn/toggle-group.svelte';
    import ToggleBtn from '$lib/components/inputs/btn/toggle-btn.svelte';
    import type { panelCSSProps, starletteProps, webTheme} from '$lib/types';
    import Promote from '$lib/components/icons/Promote.svelte';
    import User from '$lib/components/icons/User.svelte';
    import Visibility from '$lib/components/icons/Visibility.svelte';
    import VisibilityOff from '$lib/components/icons/VisibilityOff.svelte';


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
            label='supplied value'
            value='yadda yadda'
        />
        <TextInput 
            type='password'
            label='password input'
            value='pa$$w0rd'
        />
        <TextInput 
        label='with a placeholder'
        placeholder='beep bop boop'
        />
        <TextInput 
        label='clearable text input'
        clearable
        value='buh bye'
        />
        <TextInput 
        label='custom accentColor'
        accentColor='orange'
        />
        <TextInput 
        label='custom focusColor'
        focusColor='orange'
        />
        <TextInput 
        label='custom fontColor'
        fontColor='orange'
        />
        <TextInput label='appendInner Slot'>
            <Promote slot='appendInner' />
        </TextInput>
        <TextInput label='appendInner Slot & clearable' clearable>
            <Promote slot='appendInner' />
        </TextInput>
        <TextInput label='prependInner Slot'>
            <User slot='prependInner' />
        </TextInput>
        <TextInput label='prependInner & appendInner Slots'>
            <User slot='prependInner' />
            <Promote slot='appendInner' />
        </TextInput>
        <TextInput label='prepend Slot'>
            <User slot='prepend' />
        </TextInput>
        <TextInput label='append Slot'>
            <Promote slot='append' />
        </TextInput>
        <TextInput 
            label='with a message'
            message='sample message text'
        />
        <TextInput 
            invalid
            label='invalid'
            message='invalid input message'
        />
        <TextInput 
            invalid
            label='invalid with append slot'
            message='invalid input message'
        >
            <Promote slot='append'/>
        </TextInput>
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