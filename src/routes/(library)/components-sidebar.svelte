<script lang="ts" module>
	export type NavItem = {
		title: string;
		href?: string;
		disabled?: boolean;
		external?: boolean;
		label?: string;
		icon?: Component;
		indicator?: 'new';
	};

	export type SidebarNavItem = NavItem & {
		items: SidebarNavItem[];
	};
</script>

<script lang="ts">
	import * as Sidebar from '$ui/sidebar/index.js';

	import { page } from '$app/state';

	import type { Component, ComponentProps } from 'svelte';

	import * as env from '$env/static/public';
	import { Button } from '@coral-os/component-library/components/ui/button';
	import { Badge } from '@coral-os/component-library/components/ui/badge';

	import IconArrowSquareOut from 'phosphor-icons-svelte/IconArrowSquareOutRegular.svelte';

	const PR: null | string = (env as any).PUBLIC_PR || null;

	let {
		navItems,
		...restProps
	}: { navItems: SidebarNavItem[] } & ComponentProps<typeof Sidebar.Root> = $props();

	const pathname = $derived(page.url.pathname);
</script>

<Sidebar.Root class="hidden h-svh overscroll-none bg-transparent lg:flex" collapsible="icon">
	<Sidebar.Header class="z-40">
		<h1 class="flex items-center gap-2">
			<span class="grow font-bold">Components</span><Badge
				class="mt-[2px]"
				variant={PR ? 'secondary' : 'default'}
				target="_blank"
				href={PR ? `https://github.com/Coral-Protocol/component-library/pull/${PR}` : ''}
				>{PR ? `PR #${PR}` : 'main'}
				{#if PR}<IconArrowSquareOut />{/if}</Badge
			>
		</h1>
	</Sidebar.Header>
	<Sidebar.Content class="-mt-1 overflow-x-hidden px-2">
		<div
			class="sticky -top-1 z-30 -mt-5 h-10 shrink-0 bg-linear-to-b from-sidebar via-sidebar/90 to-sidebar/50 blur-xs"
		></div>
		{#each navItems as item (item.title)}
			<Sidebar.Group>
				<Sidebar.GroupLabel class="font-medium text-muted-foreground">
					{item.title}
				</Sidebar.GroupLabel>
				<Sidebar.GroupContent>
					{#if item.items.length}
						<Sidebar.Menu class="gap-1">
							{#each item.items as subItem (subItem.href)}
								{#if subItem.items.length === 0}
									<Sidebar.MenuItem class="w-full">
										<Sidebar.MenuButton
											isActive={subItem.href === pathname}
											class="3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-accent data-[active=true]:bg-accent"
										>
											{#snippet child({ props })}
												<a href={subItem.href} {...props}>
													<span class="absolute inset-0 flex w-(--sidebar-width) bg-transparent"
													></span>
													{subItem.title}
													{#if subItem.indicator === 'new'}
														<span class="bg-svelte-orange flex size-2 rounded-full" title="New"
														></span>
													{/if}
												</a>
											{/snippet}
										</Sidebar.MenuButton>
									</Sidebar.MenuItem>
								{/if}
							{/each}
						</Sidebar.Menu>
					{/if}
				</Sidebar.GroupContent>
			</Sidebar.Group>
		{/each}
		<div
			class="sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t from-sidebar via-sidebar/80 to-sidebar/50 blur-xs"
		></div>
	</Sidebar.Content>
</Sidebar.Root>
