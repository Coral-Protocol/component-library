<script lang="ts">
	import { onMount } from 'svelte';
	import { Accordion as AccordionPrimitive } from 'bits-ui';
	import { cn, type WithoutChild } from '@coral-os/component-library/utils.js';

	let mounted = $state(false);

	onMount(() => {
		mounted = true;
	});

	type Props = AccordionPrimitive.ContentProps & {
		animate?: boolean;
	};

	let {
		ref = $bindable(null),
		class: className,
		children,
		animate,
		...restProps
	}: WithoutChild<Props> = $props();
</script>

<AccordionPrimitive.Content
	bind:ref
	data-slot="accordion-content"
	class={cn(
		'overflow-hidden px-2 text-xs/relaxed',
		animate && 'data-open:animate-accordion-down data-closed:animate-accordion-up'
	)}
	{...restProps}
>
	<div
		class={cn(
			'pt-2 pb-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4',
			className
		)}
	>
		{@render children?.()}
	</div>
</AccordionPrimitive.Content>
