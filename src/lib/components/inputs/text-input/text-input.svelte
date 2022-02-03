<script lang="ts">
	import type { buttonVariant, panelCSSProps, starletteProps, txtInputType } from '$lib/types';
	import { nanoid } from 'nanoid';
	import { setCSSProps } from '$lib/logic/style';

	import Btn from '$lib/components/inputs/btn/btn.svelte';
	import Close from '$lib/components/icons/Close.svelte';
	import Alert from '$lib/components/icons/Alert.svelte';
	import Visibility from '$lib/components/icons/Visibility.svelte';
	import VisibilityOff from '$lib/components/icons/VisibilityOff.svelte';

	export let accentColor: string | null = null;
	export let clearable: boolean = false;
	export let cssProps: panelCSSProps = {};
	export let focusColor: string | null = null;
	export let fontColor: string | null = null;
	export let invalid: boolean = false;
	export let label: string | null = null;
	export let message: string | null = null;
	export let placeholder: string | null = null;
	export let starletteCSSProps: starletteProps = {};
	export let type: txtInputType = 'text';
	export let value: string = '';
	export let variant: buttonVariant = null;

	const id = nanoid();
	let focus: boolean = false;
	let passwordVisible: boolean = false;
	let reactiveType: txtInputType = type;
    let inputElement:HTMLInputElement;
	let comboCSSProps = { ...starletteCSSProps, ...cssProps };
	if (accentColor) comboCSSProps = { ...comboCSSProps, ...{ colorDefault: accentColor } };
	if (focusColor) comboCSSProps = { ...comboCSSProps, ...{ focusColor: focusColor, quietFocusColor: focusColor} };
	if (fontColor) comboCSSProps = { ...comboCSSProps, ...{ buttonPrimaryText: fontColor } };

	const toggleFocus = () => (focus = !focus);
	const togglePasswordVisibility = () => (passwordVisible = !passwordVisible);
	const clearValue = () => {
        value = '';
        inputElement.focus();
    }

	// https://stackoverflow.com/questions/57392773/error-type-attribute-cannot-be-dynamic-if-input-uses-two-way-binding
	const handleInput = (e) => {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	};

	$: {
		if (type === 'password') {
			if (passwordVisible) {
				reactiveType = 'text';
			} else {
				reactiveType = 'password';
			}
		}
	}

	let quiet: boolean = false;
	let silent: boolean = false;
	let solid: boolean = false;
	$: {
		switch (variant) {
			case 'quiet':
				quiet = true;
				silent = false;
				solid = false;
				break;
			case 'silent':
				quiet = false;
				silent = true;
				solid = false;
				break;
			case 'solid':
				quiet = false;
				silent = false;
				solid = true;
				break;
			default:
				solid = false;
				quiet = false;
				silent = false;
		}
	}
</script>

<div>
	{#if label && label.length > 0}
		<label for={id}>{label}</label>
	{/if}

	<div class="input-wrapper">
		{#if $$slots.prepend}
			<div class="append"><slot name="prepend" /></div>
		{/if}
		<div
			class="input-content"
			class:focus
			class:invalid
			class:quiet
			use:setCSSProps={comboCSSProps}
		>
			{#if $$slots.prependInner}
				<slot name="prependInner" />
			{/if}
			<input
				name={label}
				{id}
				{placeholder}
				type={reactiveType}
				{value}
				class:quiet
                class:invalid
                bind:this={inputElement}
				on:input={handleInput}
				on:focus={toggleFocus}
				on:blur={toggleFocus}
			/>
			{#if clearable || type === 'password' || $$slots.appendInner}
				<div class="append-inner">
					{#if clearable}<Btn variant="silent" on:click={clearValue}><Close /></Btn> {/if}
					{#if type === 'password'}
						<Btn variant="silent" on:click={togglePasswordVisibility}>
							{#if passwordVisible}
								<VisibilityOff size="l" />
							{:else}
								<Visibility size="l" />
							{/if}
						</Btn>
					{/if}
					<slot name="appendInner" />
				</div>
			{/if}
		</div>
		{#if invalid || $$slots.append}
			<slot name="append" />
			{#if invalid}<span class="alert"><Alert size="l" /></span>{/if}
		{/if}
		{#if message && message.length > 1}
			<div class="message" class:invalid>
				{message}
			</div>
		{/if}
	</div>
</div>

<style type="text/scss">
	div {
		// sizes
		--width: auto;
		--scale: 1;
		--font-size: 1em;
		--custom-font-size: 1em;
		--calc-font-size: calc(var(--scale) * var(--font-size));
		--calc-border-rad: calc(var(--scale) * var(--border-top-left-radius))
			calc(var(--scale) * var(--border-top-right-radius))
			calc(var(--scale) * var(--border-bottom-right-radius))
			calc(var(--scale) * var(--border-bottom-left-radius));
		--calc-height: calc(var(--scale) * var(--input-height));
		--calc-padding-x: calc(var(--scale) * var(--padding-x));
		--calc-padding-y: calc(var(--scale) * var(--padding-y));
		--focus-color: var(--primary);
        --quiet-focus-color: var(--color-default);
	}

	input:not([type='submit']):not([type='file']) {
		font-family: 'Open Sans', sans-serif;
		font-size: var(--calc-font-size);
		color: var(--button-primary-text);
		box-sizing: border-box;
		background-color: transparent;
		display: block;
		width: var(--width);
		height: var(--calc-height);
		border: var(--border-width) solid transparent;
		outline: none;
		&.quiet:focus:not(.invalid) {
			color: var(--color-btn-active);
		}
        &.quiet:focus.invalid {
            color: var(--tooltip-color);
        }
	}
	label {
		display: block;
		padding-left: var(--calc-padding-x);
	}

	.input-content {
		display: flex;
		align-items: center;
		border: var(--border-width) solid var(--color-default);
		border-radius: var(--calc-border-rad);
		padding-top: var(--calc-padding-y);
		padding-bottom: var(--calc-padding-y);
		padding-left: var(--calc-padding-x);
		padding-right: var(--calc-padding-x);
		&.invalid {
            border-color: var(--error);
		}
		&.focus:not(.invalid) {
            border-color: var(--focus-color);
		}
        &.quiet {
            z-index: 0;
            border-color: transparent;
            position: relative;
            &.focus:not(.invalid) {
                border-color: transparent;
            }
            &::after {
                content: '';
                box-sizing: border-box;
                background-color: var(--color-default);
                box-shadow: none;
                opacity: var(--opacity-quiet);
                position: absolute;
                left: calc(var(--border-width) * -1);
                top: calc(var(--border-width) * -1);
                bottom: calc(var(--border-width) * -1);
                right: calc(var(--border-width) * -1);
                z-index: -2;
                border-radius: var(--calc-border-rad);
                transition: opacity 0.25s cubic-bezier(0.58, 0.19, 0.22, 1);
            }
            &.focus {
                color: var(--color-btn-active);
            }
            &.focus::after,
            &:focus::after {
                opacity: var(--opacity-quiet--focus);
                background-color: var(--quiet-focus-color);
            }
            &.invalid::after {
                background-color: var(--error);
            }
        }
	}

	.input-wrapper {
		display: flex;
		align-items: center;
		gap: 0.5em;
		position: relative;
	}

	.alert {
		color: var(--error);
		height: var(--input-height);
		display: flex;
		flex-direction: column;
		justify-content: center;
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

	.append-inner {
		display: flex;
		align-items: center;
	}

	.append {
		height: var(--input-height);
		display: flex;
		align-items: center;
	}
</style>
