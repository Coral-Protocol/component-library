<script lang="ts">
	import * as Tooltip from '@coral-os/component-library/components/ui/tooltip/index.js';
	import { Label } from '@coral-os/component-library/components/ui/label/index.js';

	import type { Snippet } from 'svelte';
	import type { LabelRootProps } from 'bits-ui';
	import { cn } from '../utils';

	const {
		tooltip,
		extra,
		type,
		required,
		title,
		class: className,
		children: labelChild,
		...rest
	}: LabelRootProps & {
		extra?: Record<string, ExtraValue>;
		tooltip?: string;
		type?: string;
		title?: string;
		required?: boolean;
		class?: string;
		children?: Snippet;
	} = $props();

	type ExtraValue =
		| boolean
		| string
		| {
				value: string | true;
				showKey?: boolean;
		  };
</script>

<Tooltip.Provider>
	<Tooltip.Root disabled={!tooltip} delayDuration={100} disableHoverableContent>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				<Label
					{...props}
					{...rest}
					class={cn(
						'relative m-0! inline-grid! w-auto cursor-help grid-flow-col content-center justify-start gap-0! leading-5',
						className
					)}
				>
					<span class="truncate font-normal">{@render labelChild?.()}</span>

					{#if extra && extra.required === true}
						<span class="ml-1 shrink-0 text-destructive select-none">*</span>
					{/if}
				</Label>
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content class="flex w-fit max-w-96 flex-col gap-2 wrap-break-word ">
			{#if title}
				<p class="font-bold">{title}</p>
			{/if}
			{#if tooltip}
				<p>{tooltip}</p>
			{/if}
			{#if extra}
				{#each Object.entries(extra) as [key, item]}
					{#if key === 'required' && item === true}
						<p><span class="font-bold">{key}</span></p>
					{:else if item === true}
						<p><span class="font-bold">{key}</span></p>
					{:else if typeof item === 'string'}
						<p><span class="font-bold">{key}:</span> {item}</p>
					{:else if typeof item === 'object' && item !== null}
						<p>
							{#if item.showKey !== false}
								<span class="font-bold">{key}:</span>
							{/if}
							{item.value === true ? '' : item.value}
						</p>
					{/if}
				{/each}
			{/if}
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
