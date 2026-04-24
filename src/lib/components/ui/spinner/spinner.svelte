<script lang="ts">
	import { cn } from '@coral-os/component-library/utils.js';
	import SpinnerIcon from 'phosphor-svelte/lib/SpinnerGapIcon';
	import type { HTMLAttributes } from 'svelte/elements';

	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div role="status" aria-label="Loading" {...restProps}>
	<SpinnerIcon class={cn('size-4 animate-spin', className)} />
</div>
