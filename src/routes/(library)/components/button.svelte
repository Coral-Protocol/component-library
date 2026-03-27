<script lang="ts">
	import { Button, buttonVariants } from '$ui/button';

	import { Checkbox } from '$ui/checkbox';
	import { Label } from '$ui/label';
	import { Input } from '$ui/input';

	import * as Card from '$ui/card';

	import IconArchive from 'phosphor-icons-svelte/IconArchiveRegular.svelte';
	import { Separator } from '@coral-os/component-library/components/ui/separator';

	let variants = Object.keys(
		buttonVariants.variants.variant
	) as (keyof typeof buttonVariants.variants.variant)[];
	let sizes = Object.keys(
		buttonVariants.variants.size
	) as (keyof typeof buttonVariants.variants.size)[];

	let sizeVisibility = $state(Object.fromEntries(sizes.map((s) => [s, true])));
	let textOverride = $state('');
</script>

<Card.Root id="button">
	<Card.Header>
		<Card.Title>Button</Card.Title>
	</Card.Header>
	<Card.Content class="grid grid-cols-[repeat(auto-fit,minmax(35ch,1fr))] gap-2">
		<Card.Root class="">
			<Card.Content class="flex flex-col gap-2">
				<h2 class="font-sans font-bold">Visibility</h2>
				<section class="flex gap-2">
					{#each sizes as size}
						<Label>
							<Checkbox bind:checked={sizeVisibility[size]} />
							{size}
						</Label>
					{/each}
				</section>
				<Separator class="my-2" />
				<Input bind:value={textOverride} placeholder="Text Override" />
			</Card.Content>
		</Card.Root>
		{#each variants as variant}
			<Card.Root>
				<Card.Header>
					<Card.Title>{variant}</Card.Title>
				</Card.Header>
				<Card.Content class="flex flex-col gap-1">
					<div class="flex flex-wrap items-center justify-center gap-2">
						{#each sizes as size}
							{#if sizeVisibility[size]}
								<Button {variant} {size}
									>{#if size === 'icon'}
										<IconArchive />
									{:else}
										{textOverride || size}
									{/if}</Button
								>
							{/if}
						{/each}
					</div>
					<div class="flex flex-wrap items-center justify-center gap-2">
						{#each sizes as size}
							{#if sizeVisibility[size]}
								<Button {variant} {size} disabled
									>{#if size === 'icon'}
										<IconArchive />
									{:else}
										{textOverride || size}
									{/if}</Button
								>
							{/if}
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</Card.Content>
</Card.Root>
