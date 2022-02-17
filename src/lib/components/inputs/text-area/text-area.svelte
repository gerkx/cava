<script lang='ts'>
	import { nanoid } from 'nanoid';
	import { setCSSProps } from '$lib/logic/style';
    import type { inputVariant, panelCSSProps, starletteProps, txtInputType } from '$lib/types';

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

	let textAreaElement: HTMLTextAreaElement;
    const clearValue = () => { value = ''; textAreaElement.focus(); };

    let focus: boolean = false;
    const toggleFocus = () => (focus = !focus);

    let comboCSSProps = { ...starletteCSSProps, ...cssProps };
    if (accentColor) comboCSSProps = { ...comboCSSProps, ...{ colorDefault: accentColor } };
	if (focusColor)
		comboCSSProps = {
			...comboCSSProps,
			...{ focusColor: focusColor, quietFocusColor: focusColor }
		};
	if (fontColor) comboCSSProps = { ...comboCSSProps, ...{ buttonPrimaryText: fontColor } };

    let quiet: boolean = false;
	let silent: boolean = false;
    $: {
		switch (variant) {
			case 'quiet':
				quiet = true;
				silent = false;
				break;
			case 'silent':
				quiet = false;
				silent = true;
				break;
			default:
				quiet = false;
				silent = false;
		}
	}


</script>

<div class='wrapper' class:disabled use:setCSSProps={comboCSSProps}>
    <!-- prepend block -->
    { #if $$slots.prepend } 
        <div class='appendage'>
            <span class='append-slot'><slot name="prepend" /></span>
        </div>
    { /if }

    <!-- main block -->
    <div class='textarea-wrapper'>
        { #if label && label.length > 0 }
            <label for={id} class:disabled>{label}</label>
        { /if }
        <div class=textarea class:quiet class:focus class:invalid>
            <textarea
                class:invalid
                class:quiet
                class:resize
                { disabled }
                { placeholder }
                bind:value
                bind:this={textAreaElement}
                on:focus={toggleFocus}
                on:blur={toggleFocus}
            />
        </div>
        {#if message && message.length > 1}
            <div class="message" class:invalid>
                {message}
            </div>
        {/if}
    </div>
    <!-- ------------ -->
    <!-- append block -->
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
            { #if $$slots.append }<span class='append-slot'><slot name="append" /></span> { /if }
            { #if invalid }<span class="alert"><Alert size="l" /></span> { /if }
        </div>
        { /if }
</div>

<style type="text/scss">
    @import '../../../scss/inputs.scss';

    .wrapper {
        @include input-sizing;
        --focus-color: var(--primary);
        --quiet-focus-color: var(--color-default);
        width: 100%;
        display: flex;
        &.disabled {
            opacity: var(--opacity--disabled--text);
        }
    }

    .textarea-wrapper {
        width: 100%;
        display: flex;
        position: relative;
        flex-direction: column;
    }

    .appendage {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: var(--calc-padding-x) 0;
        margin-top: 1em;
    }
    .append-slot {
        padding: 0 var(--calc-padding-x);
        &:first-child {
            padding-top: var(--calc-padding-x);
        }
        &:last-child {
            padding-bottom: 0;
        }
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
        &.quiet {
            background-color: transparent;
            border-color: transparent;
            position: relative;
            
            // opacity: var(--opacity-quiet);
            &:focus:not(.invalid) {
                border-color: transparent;
			    color: var(--color-dropdown-hover);
            }
		}
    }
    
    .textarea.quiet {
        position: relative;
        &::after {
            content: '';
            box-sizing: border-box;
            background-color: var(--color-default);
            box-shadow: none;
            opacity: var(--opacity-quiet);
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            z-index: -1;
            border-radius: var(--calc-border-rad);
            transition: opacity 0.22s var(--std-ease);
        }
        &.focus::after {
            opacity: var(--opacity-quiet--focus);
            background-color: var(--quiet-focus-color);
        }
        &.invalid {
            &::after {
                background-color: var(--error);
                opacity: calc(var(--opacity-quiet) * 2);
            }
            &.focus::after{
                opacity: var(--opacity-quiet--focus);
            }
        }

    }

    label {
		display: block;
		padding-left: var(--calc-padding-x);
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