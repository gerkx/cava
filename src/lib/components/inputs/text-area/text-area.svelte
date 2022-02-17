<script lang='ts'>
    import type { inputVariant, panelCSSProps, starletteProps, txtInputType } from '$lib/types';
	import { nanoid } from 'nanoid';
    // COMPONENTS //
	import Btn from '$lib/components/inputs/btn/btn.svelte';
    // ICONS //
	import Close from '$lib/components/icons/Close.svelte';
	import Alert from '$lib/components/icons/Alert.svelte';

    ///////////
    // Props //
    ///////////
    // STYLE //
    export let accentColor: string | null = null;
	export let cssProps: panelCSSProps = {};
	export let focusColor: string | null = null;
	export let fontColor: string | null = null;
	export let starletteCSSProps: starletteProps = {};
	export let variant: inputVariant = null;
    // OPERATIONAL //
	export let clearable: boolean = false;
	export let disabled: boolean = false;
	export let id:string = nanoid();
	export let invalid: boolean = false;
	export let label: string | null = null;
	export let message: string | null = null;
	export let placeholder: string | null = null;
    export let resize: boolean = false;
	export let value: string = '';

    let comboCSSProps = { ...starletteCSSProps, ...cssProps };
	
    const clearValue = () => { value = ''; inputElement.focus(); };

    let focus: boolean = false;
	let inputElement: HTMLTextAreaElement;
	let passwordVisible: boolean = false;
    let quiet: boolean = false;
	let silent: boolean = false;

    if (accentColor) comboCSSProps = { ...comboCSSProps, ...{ colorDefault: accentColor } };
	if (focusColor)
		comboCSSProps = {
			...comboCSSProps,
			...{ focusColor: focusColor, quietFocusColor: focusColor }
		};
	if (fontColor) comboCSSProps = { ...comboCSSProps, ...{ buttonPrimaryText: fontColor } };


</script>

<div class='wrapper'>
    {#if label && label.length > 0}
		<label for={id} class:disabled>{label}</label>
	{/if}
    <div class='textarea-wrapper'>
        <textarea
            class:resize
            class:invalid
            bind:value
            { placeholder }
            bind:this={inputElement}
        />
        { #if clearable || invalid || $$slots.append }
        <div class='appendage'>
            { #if clearable }
            <Btn 
                variant='silent' 
                tabindex={-1}
                on:click={clearValue} >
                <Close/>
            </Btn>
            { /if }
            <span class='append-slot'><slot name="append" /></span>
            { #if invalid }<span class="alert"><Alert size="l" /></span> { /if }
        </div>
        { /if }
        {#if message && message.length > 1}
			<div class="message" class:invalid>
				{message}
			</div>
		{/if}
    </div>
</div>

<style type="text/scss">
    @import '../../../scss/inputs.scss';

    .wrapper {
        @include input-sizing;
        --focus-color: var(--primary);
        --quiet-focus-color: var(--color-default);
        width: 100%;
    }

    .textarea-wrapper {
        width: 100%;
        display: flex;
        position: relative;
    }

    .appendage {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: var(--calc-padding-x) 0;
    }
    .append-slot {
        padding: 0 var(--calc-padding-x);
    }

    textarea {
        @include input-typography;
		background-color: transparent;
        border-radius: var(--calc-border-rad);
        border: var(--border-width) solid var(--color-default);
        box-sizing: border-box;
        outline: none;
        padding: var(--calc-padding-x);
        resize: none;
        height: calc(var(--calc-height) *  3.25);
        width: 100%;
        &.invalid {
            border-color: var(--error);
        }
        &:focus:not(.invalid) {
            border-color: var(--focus-color);
        }
        &.resize {
            resize: vertical;
        }

    }

    label {
		display: block;
		padding-left: var(--calc-padding-x);
		&.disabled {
			opacity: var(--opacity--disabled);
		}
	}

    .alert {
		color: var(--error);
		height: var(--input-height);
		display: flex;
		flex-direction: column;
		justify-content: center;
        padding: 0 var(--calc-padding-x)
	}

    .message {
		padding-left: var(--calc-padding-x);
		position: absolute;
		top: 100%;
		font-size: 0.85em;
		&.invalid {
			color: var(--error);
		}
	}

</style>