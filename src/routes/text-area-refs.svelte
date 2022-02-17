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
			<TextArea label="resizeable text area" resize />
		</div>
		<div class="beep">
			<TextArea label="text area w/ placeholder" placeholder="placeholder text... blah blah blah" />
		</div>
		<div class="pb beep">
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
		<div class="pb beep">
            <TextArea label="invalid text area" invalid message="invalid message" />
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
		&:not(:first-child) {
			padding-top: 2.5em;
		}
	}
	.pb {
		width: inherit;
		padding-bottom: 1em;
	}
	.beep {
		width: 49%;
	}
</style>
