<script lang="ts">
	import { cn } from '@coral-os/component-library/lib/utils.js';
	import SpinnerIcon from 'phosphor-icons-svelte/IconSpinnerGapRegular.svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	let { class: className, ...restProps }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div role="status" aria-label="Loading" {...restProps}>
	<SpinnerIcon class={cn('size-4 animate-spin', className)} />
</div>
