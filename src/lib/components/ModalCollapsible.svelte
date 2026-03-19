<script lang="ts">
	import * as Collapsible from '@coral-os/component-library/components/ui/collapsible/index.js';
	import { buttonVariants } from '@coral-os/component-library/components/ui/button/index.js';

	import CaretRightIcon from 'phosphor-icons-svelte/IconCaretRightRegular.svelte';

	import type { Snippet } from 'svelte';
	import { cn } from '@coral-os/component-library/utils.js';

	const { title, children }: { title: string; children?: Snippet } = $props();
</script>

<Collapsible.Root class="group" open={false}>
	<Collapsible.Trigger
		class={cn(
			buttonVariants({ size: 'icon', variant: 'ghost' }),
			'flex h-6 w-max flex-row items-center gap-1 px-2 pl-1'
		)}
	>
		<CaretRightIcon class="transition-transform group-data-[state=open]:rotate-90" />
		<h3 class="text-sm font-bold">{title}</h3>
	</Collapsible.Trigger>
	<Collapsible.Content class="max-w-full pr-2 pl-4">
		{@render children?.()}
	</Collapsible.Content>
</Collapsible.Root>
