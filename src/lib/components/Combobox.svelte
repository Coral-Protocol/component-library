<script lang="ts" generics="Value, Mode extends 'single' | 'multiple' = 'single'">
	import * as Command from '@coral-os/component-library/components/ui/command/index.js';
	import * as Popover from '@coral-os/component-library/components/ui/popover/index.js';
	import { Button } from '@coral-os/component-library/components/ui/button/index.js';

	import { tick, type ComponentProps, type Snippet } from 'svelte';
	import { cn } from '@coral-os/component-library/utils.js';

	import CheckIcon from 'phosphor-icons-svelte/IconCheckRegular.svelte';
	import CaretUpDownIcon from 'phosphor-icons-svelte/IconCaretUpDownRegular.svelte';

	type Entry = Value extends string
		? { label: string; key?: string; value: Value } | Value
		: { label: string; key?: string; value: Value };

	type Selected<M extends Mode> = M extends 'multiple' ? Entry[] : Entry | undefined;

	let {
		open = $bindable(false),
		disabled = false,
		type = 'single' as Mode,
		selected = $bindable(undefined as Selected<Mode>),
		selectPlaceholder = 'Select an item...',
		searchPlaceholder = 'Search items...',
		emptyLabel = 'No items found.',
		options = [],
		onValueChange,

		side,
		align,

		option: optionChild,
		trigger,
		class: className
	}: {
		open?: boolean;
		disabled?: boolean;

		type?: Mode;
		selected?: Selected<Mode>;
		onValueChange?: (value: Mode extends 'multiple' ? Value[] : Value) => void;

		options?: { heading?: string; items: Entry[] }[];
		selectPlaceholder?: string;
		searchPlaceholder?: string;
		emptyLabel?: string;

		side?: ComponentProps<typeof Popover.Content>['side'];
		align?: ComponentProps<typeof Popover.Content>['align'];

		option?: Snippet<[{ item: Entry }]>;
		trigger?: Snippet<[{ props: Record<string, unknown> }]>;
		class?: string;
	} = $props();

	let triggerRef = $state(null) as HTMLButtonElement | null;
	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	function closeAndFocusTrigger() {
		open = false;
		tick().then(() => {
			if (!triggerRef) return;
			triggerRef.focus();
		});
	}

	const getKey = (entry: Entry) => (typeof entry === 'string' ? entry : (entry.key ?? entry.label));

	const isSelected = (item: Entry) => {
		if (type === 'multiple') {
			return (selected as Entry[]).some((s) => getKey(s) === getKey(item));
		}
		return selected && getKey(selected as Entry) === getKey(item);
	};
	const toggleItem = (item: Entry) => {
		if (type === 'multiple') {
			const arr = (selected as Entry[] | undefined) ?? [];
			const exists = arr.some((s) => getKey(s) === getKey(item));

			const next = exists ? arr.filter((s) => getKey(s) !== getKey(item)) : [...arr, item];

			selected = next as Selected<Mode>;
			onValueChange?.(next.map((i) => (typeof i === 'string' ? i : i.value)) as any);
		} else {
			selected = item as Selected<Mode>;
			onValueChange?.((typeof item === 'string' ? item : item.value) as any);
			closeAndFocusTrigger();
		}
	};
</script>

<Popover.Root bind:open>
	<Popover.Trigger bind:ref={triggerRef} {disabled}>
		{#snippet child({ props })}
			{#if trigger}
				{@render trigger({ props })}
			{:else}
				<Button
					variant="outline"
					{...props}
					class={cn('w-[200px] justify-between', className)}
					role="combobox"
					aria-expanded={open}
				>
					{#if selected !== undefined}
						{#if Array.isArray(selected)}
							{#if selected.length === 0}
								{selectPlaceholder}
							{:else}
								{selected.map((s) => (typeof s === 'string' ? s : s.label)).join(', ')}
							{/if}
						{:else}
							{typeof selected === 'string' ? selected : selected.label}
						{/if}
					{:else}
						{selectPlaceholder}
					{/if}
					<CaretUpDownIcon class="ml-2 size-4 shrink-0 opacity-50" />
				</Button>
			{/if}
		{/snippet}
	</Popover.Trigger>
	<Popover.Content class="w-[200px] p-0" {side} {align}>
		<Command.Root>
			<Command.Input placeholder={searchPlaceholder} />
			<Command.List>
				<Command.Empty>{emptyLabel}</Command.Empty>
				{#each options as group}
					<Command.Group heading={group.heading}>
						{#each group.items as item}
							<Command.Item value={getKey(item)} onSelect={() => toggleItem(item)}>
								{#if optionChild}
									{@render optionChild({ item })}
								{:else}
									<CheckIcon class={cn('mr-2 size-4', !isSelected(item) && 'text-transparent')} />
									{typeof item === 'string' ? item : item.label}
								{/if}
							</Command.Item>
						{/each}
					</Command.Group>
				{/each}
			</Command.List>
		</Command.Root>
	</Popover.Content>
</Popover.Root>
