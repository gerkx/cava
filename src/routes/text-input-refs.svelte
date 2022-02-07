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
        accentColor='#6fde14'
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
    <div class='section'>
        <TextInput label='quiet variant' variant='quiet' />
        <TextInput 
            value='value'
            label='quiet supplied value' 
            variant='quiet' 
        />
        <TextInput 
            type='password'
            value='pa$$w0rd'
            label='quiet password' 
            variant='quiet' 
        />
        <TextInput 
            placeholder='quiet placeholder'
            label='quiet placeholder' 
            variant='quiet' 
        />
        <TextInput label='quiet w/ appendInner' variant='quiet'>
            <Promote slot='appendInner' />
        </TextInput>
        <TextInput label='quiet w/ append' variant='quiet' clearable>
            <Promote slot='append' />
        </TextInput>
        <TextInput 
            label='quiet invalid' 
            variant='quiet'  
            invalid
            message='invalid input message'
        />
        <TextInput 
            label='quiet custom accentColor' 
            variant='quiet' 
            accentColor='orange'
        />
        <TextInput 
            label='quiet custom focusColor' 
            variant='quiet' 
            focusColor='pink'
        />
        <TextInput 
            label='quiet custom fontColor' 
            variant='quiet' 
            fontColor='#88fc03'
        />
    </div>
    <div class="section">
        <TextInput label='silent variant' variant='silent' />
        <TextInput label='silent supplied value' value='beep bop boop' variant='silent' />
        <TextInput 
            type='password'
            value='pa$$w0rd'
            label='silent password' 
            variant='silent' 
        />
        <TextInput 
            placeholder='silent placeholder'
            label='silent placeholder' 
            variant='silent' 
        />
        <TextInput label='silent w/ appendInner' variant='silent'>
            <Promote slot='appendInner' />
        </TextInput>
        <TextInput label='silent w/ append' variant='silent' clearable>
            <Promote slot='append' />
        </TextInput>
        <TextInput 
            label='silent invalid' 
            variant='silent'  
            invalid
            message='invalid input message'
        />
        <TextInput 
            label='silent custom accentColor' 
            variant='silent' 
            accentColor='orange'
        />
        <TextInput 
            label='silent custom focusColor' 
            variant='silent' 
            focusColor='#88fc03'
        />
        <TextInput 
            label='silent custom fontColor' 
            variant='silent' 
            fontColor='#88fc03'
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
            padding-top: 2.5em;
        }
    }
</style>