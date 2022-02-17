<script lang="ts">
	import Panel from '$lib/components/containers/panel.svelte';
	import TextInput from '$lib/components/inputs/text-input/text-input.svelte';
	import TextArea from '$lib/components/inputs/text-area/text-area.svelte';

	import Promote from '$lib/components/icons/Promote.svelte';
	import User from '$lib/components/icons/User.svelte';
</script>

<Panel>
	<div class="section">
		<div class="beep">
			<TextArea label="standard text area" />
		</div>
		<div class="beep">
			<TextArea label="disabled text area" disabled />
		</div>
		<div class="beep">
			<TextArea label="text area w/ value" value='beep bop boop' />
		</div>
		<div class="beep">
			<TextArea label="resizeable text area" resize />
		</div>
		<div class="beep">
			<TextArea label="text area w/ placeholder" placeholder="placeholder text... blah blah blah" />
		</div>
		<div class="beep">
			<TextArea label="text area w/ message" message="message text" />
		</div>
		<div class="beep">
			<TextArea label="clearable text area" clearable />
		</div>
		<div class="beep">
			<TextArea label="text area with append">
				<Promote slot="append" />
			</TextArea>
		</div>
		<div class="beep">
            <TextArea label="invalid text area" invalid message="invalid message" />
		</div>
		<div class="beep">
            <TextArea label="the trifecta" invalid message="invalid message" clearable > 
                <Promote slot="append" />
            </TextArea>
		</div>
		<div class="beep">
            <TextArea label="prepended icon"> 
                <Promote slot="prepend" />
            </TextArea>
		</div>
        <div class="beep">
            <TextArea label="custom accentColor" accentColor='#e82098' />
        </div>
        <div class="beep">
            <TextArea label="custom focusColor" focusColor='#e82098' />
        </div>
        <div class="beep">
            <TextArea label="custom fontColor" fontColor='#e82098' />
        </div>
	</div>
	<div class="section">
		<div class="beep">
			<TextArea label="quiet text area" variant='quiet' />
		</div>
		<div class="beep">
			<TextArea label="disabled quiet text area" variant='quiet' disabled />
		</div>
		<div class="beep">
			<TextArea label="text area w/ value" variant='quiet' value='beep bop boop' />
		</div>
		<div class="beep">
			<TextArea label="text area w/ placeholder" variant='quiet' placeholder="placeholder text... blah blah blah" />
		</div>  
		<div class="beep">
            <TextArea label="invalid text area" variant='quiet' invalid message="invalid message" />
		</div>
        <div class="beep">
            <TextArea label="custom accentColor" variant='quiet' accentColor='#e82098'/>
        </div>
        <div class="beep">
            <TextArea label="custom focusColor" variant='quiet' focusColor='#e82098' />
        </div>
        <div class="beep">
            <TextArea label="custom fontColor" variant='quiet' fontColor='#e82098' />
        </div>
	</div>
	<div class="section">
		<div class="beep">
			<TextArea label="silent text area" variant='silent' />
		</div>
		<div class="beep">
			<TextArea label="disabled quiet text area" variant='silent' disabled />
		</div>
		<div class="beep">
			<TextArea label="text area w/ value" variant='silent' value='beep bop boop' />
		</div>
		<div class="beep">
			<TextArea label="text area w/ placeholder" variant='silent' placeholder="placeholder text... blah blah blah" />
		</div>  
		<div class="beep">
            <TextArea label="invalid text area" variant='silent' invalid message="invalid message" />
		</div>
        <div class="beep">
            <TextArea label="custom accentColor" variant='silent' accentColor='#e82098'/>
        </div>
        <div class="beep">
            <TextArea label="custom focusColor" variant='silent' focusColor='#e82098' />
        </div>
        <div class="beep">
            <TextArea label="custom fontColor" variant='silent' fontColor='#e82098' />
        </div>
	</div>
</Panel>

<style type="text/scss">
	.section {
		width: 100%;
		display: flex;
		gap: 0.5em;
		flex-wrap: wrap;
		align-items: center;
        padding-bottom: 1em;
		&:not(:first-child) {
			padding-top: 2.5em;
		}
	}
	.beep {
        width: 33%;
        padding-bottom: 1em;

	}
</style>
