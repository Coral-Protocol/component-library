<script lang="ts">
	import ComponentsSidebar from './components-sidebar.svelte';

	import * as Sidebar from '$ui/sidebar/index.js';
	import { ScrollArea } from '@coral-os/component-library/components/ui/scroll-area';

	let { children } = $props();
</script>

<div class="flex size-full flex-1 flex-col">
	<Sidebar.Provider
		class="size-full flex-1 items-start px-0 [--sidebar-width:10ch] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:15ch] lg:[--top-spacing:calc(var(--spacing)*4)]"
	>
		<ComponentsSidebar
			navItems={[
				{
					title: 'Components',
					items: [
						{ title: 'Button', href: '#button', items: [] },
						{ title: 'Checkbox', href: '#checkbox', items: [] }
					]
				}
			]}
		/>
		<ScrollArea class="h-svh scroll-smooth">{@render children()}</ScrollArea>
	</Sidebar.Provider>
</div>
