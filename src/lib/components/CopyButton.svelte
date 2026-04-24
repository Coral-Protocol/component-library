<script lang="ts">
	import * as Tooltip from '@coral-os/component-library/components/ui/tooltip/index.js';
	import { buttonVariants } from '@coral-os/component-library/components/ui/button/index.js';
	import { UseClipboard } from '@coral-os/component-library/hooks/use-clipboard.svelte';

	import { cn } from '@coral-os/component-library/utils.js';
	import type { TooltipTriggerProps } from 'bits-ui';

	import IconCopy from 'phosphor-svelte/lib/CopyIcon';
	import IconCheck from 'phosphor-svelte/lib/CheckIcon';

	let { class: className, value, ...props }: TooltipTriggerProps & { value?: string } = $props();

	let clipboard = new UseClipboard();
</script>

<Tooltip.Provider>
	<Tooltip.Root>
		<Tooltip.Trigger
			disabled={!value}
			class={cn(buttonVariants({ size: 'icon' }), className)}
			onclick={() => {
				value && clipboard.copy(value);
			}}
			{...props}
		>
			{#if clipboard.copied}
				<IconCheck />
			{:else}
				<IconCopy />
			{/if}
		</Tooltip.Trigger>
		<Tooltip.Content>Copy to clipboard</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>
