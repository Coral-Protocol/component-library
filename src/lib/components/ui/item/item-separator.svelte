<script lang="ts">
	import { Separator } from "@coral-os/component-library/components/ui/separator/index.js";
	import { cn } from "@coral-os/component-library/utils.js";
	import type { ComponentProps } from "svelte";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: ComponentProps<typeof Separator> = $props();
</script>

<Separator
	bind:ref
	data-slot="item-separator"
	orientation="horizontal"
	class={cn("my-0", className)}
	{...restProps}
/>
