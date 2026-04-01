<script lang="ts">
	import * as Sidebar from '@coral-os/component-library/components/ui/sidebar/index.js';
	import type { Component, ComponentProps, Snippet } from 'svelte';
	import { page } from '$app/state';
	import { cn } from '@coral-os/component-library/utils.js';

	import IconCaretRight from 'phosphor-icons-svelte/IconCaretRightRegular.svelte';

	const {
		title,
		url,
		icon: Icon,
		badge,
		collapsible = false,
		class: className,
		disabled,
		extra,
		sub = false,
		...props
	}: ComponentProps<typeof Sidebar.MenuButton> & {
		title: string;
		url?: string;
		icon?: Component;
		badge?: number | string;
		collapsible?: boolean;
		disabled?: boolean | null;
		extra?: Snippet<[]>;
		sub?: boolean;
	} = $props();

	let Item = $derived(sub ? Sidebar.MenuSubItem : Sidebar.MenuItem);
</script>

{#snippet content()}
	{#if Icon}
		<Icon />
	{/if}
	<span class="font-sans font-medium tracking-wide">
		{title}
	</span>
	{@render extra?.()}
	{#if collapsible}
		<IconCaretRight
			class="ml-auto transition-transform duration-200 group-aria-expanded/collapsible:rotate-90"
		/>
	{/if}
{/snippet}

<Item class="{disabled ? 'pointer-events-none opacity-50' : ''} transition-opacity">
	{#if url}
		<Sidebar.MenuButton
			{...props}
			tooltipContent={props.tooltipContent ?? title}
			isActive={page.url.pathname === url}
			class={cn('group', className)}
		>
			{#snippet child({ props })}
				<a {...props} href={url}>
					{@render content()}
				</a>
			{/snippet}
		</Sidebar.MenuButton>
	{:else if collapsible}
		<Sidebar.MenuButton
			{...props}
			tooltipContent={props.tooltipContent ?? title}
			class={cn('group', className)}
		>
			{#snippet child({ props })}
				<a {...props} href={url}>
					{@render content()}
				</a>
			{/snippet}
		</Sidebar.MenuButton>
	{:else}
		<Sidebar.MenuButton
			{...props}
			tooltipContent={props.tooltipContent ?? title}
			class={cn('group', className)}
		>
			{@render content()}
		</Sidebar.MenuButton>
	{/if}
	{#if badge}
		<Sidebar.MenuBadge class="bg-primary/10">{badge}</Sidebar.MenuBadge>
	{/if}
</Item>
