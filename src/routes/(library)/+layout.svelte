<script lang="ts">
	import ComponentsSidebar from './components-sidebar.svelte';

	import * as Sidebar from '$ui/sidebar/index.js';

	let { children } = $props();
</script>

<div class="flex size-full h-svh flex-1 flex-col">
	<Sidebar.Provider
		style="--sidebar-width: 25ch"
		class="size-full flex-1 items-start px-0 [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--top-spacing:calc(var(--spacing)*4)]"
	>
		<ComponentsSidebar
			navItems={[
				{
					title: 'UI',
					items: [
						{ title: 'Button', href: '#button', items: [] },
						{ title: 'Checkbox', href: '#checkbox', items: [] },
						{ title: 'Context Menu', href: '#context-menu', items: [] }
					]
				},
				{
					title: 'Custom',
					items: [{ title: 'Combobox', href: '#combobox', items: [] }]
				}
			]}
		/>
		<div class="h-svh w-full scroll-pt-5 overflow-x-hidden overflow-y-auto scroll-smooth">
			{@render children()}
		</div>
	</Sidebar.Provider>
</div>
