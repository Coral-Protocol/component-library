<script lang="ts">
	import { Combobox } from '@coral-os/component-library';

	import * as Card from '$ui/card';
	import Button from '@coral-os/component-library/components/ui/button/button.svelte';
	import { Label } from '@coral-os/component-library/components/ui/label';

	const fruits = [
		'Apple',
		'Orange',
		'Banana',
		'Pear',
		'Strawberry',
		'Apricot',
		'Blueberry',
		'Blackberry',
		'Cherry',
		'Grape'
	];
	const vegetables = ['Carrot', 'Pepper', 'Cucumber', 'Leek', 'Onion', 'Chickpea', 'Radish'];

	const groupedOptions = [
		{
			heading: 'Fruits',
			items: fruits
		},
		{
			heading: 'Vegetables',
			items: vegetables
		}
	];

	const ungroupedOptions = [
		{
			items: fruits
		}
	];

	let groupedValue: string | undefined = $state(undefined);
	let ungroupedValue: string | undefined = $state(undefined);
</script>

<Card.Root id="combobox">
	<Card.Header>
		<Card.Title class="flex items-center gap-2"
			>Combobox
			<span class="grow"></span>
			<Button
				size="sm"
				onclick={() => {
					groupedValue = undefined;
					ungroupedValue = undefined;
				}}>Reset</Button
			></Card.Title
		>
	</Card.Header>
	<Card.Content class="grid grid-cols-[repeat(auto-fit,minmax(35ch,1fr))] gap-2">
		<Card.Root>
			<Card.Header>
				<Card.Title>Grouped</Card.Title>
			</Card.Header>
			<Card.Content class="grid grid-cols-2 gap-1">
				<div class="flex flex-col items-center justify-center gap-2">
					<h3 class="text-sm font-medium">Single</h3>
					<Combobox bind:selected={groupedValue} options={groupedOptions} />
					<Combobox disabled bind:selected={groupedValue} options={groupedOptions} />
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<h3 class="text-sm font-medium">Multiple (TODO)</h3>
					<Combobox disabled bind:selected={groupedValue} options={groupedOptions} />
					<Combobox disabled bind:selected={groupedValue} options={groupedOptions} />
				</div>
			</Card.Content>
		</Card.Root>
		<Card.Root>
			<Card.Header>
				<Card.Title>Ungrouped</Card.Title>
			</Card.Header>
			<Card.Content class="grid grid-cols-2 gap-1">
				<div class="flex flex-col items-center justify-center gap-2">
					<h3 class="text-sm font-medium">Single</h3>
					<Combobox bind:selected={ungroupedValue} options={ungroupedOptions} />
					<Combobox disabled bind:selected={ungroupedValue} options={ungroupedOptions} />
				</div>
				<div class="flex flex-col items-center justify-center gap-2">
					<h3 class="text-sm font-medium">Multiple (TODO)</h3>
					<Combobox disabled bind:selected={ungroupedValue} options={ungroupedOptions} />
					<Combobox disabled bind:selected={ungroupedValue} options={ungroupedOptions} />
				</div>
			</Card.Content>
		</Card.Root>
	</Card.Content>
</Card.Root>
