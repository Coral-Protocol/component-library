<script lang="ts">
	import { Button, buttonVariants } from '$ui/button';
	import * as Card from '$ui/card';

	let variants = Object.keys(
		buttonVariants.variants.variant
	) as (keyof typeof buttonVariants.variants.variant)[];
	let sizes = Object.keys(
		buttonVariants.variants.size
	) as (keyof typeof buttonVariants.variants.size)[];
</script>

<Card.Root id="button">
	<Card.Header>
		<Card.Title>Button</Card.Title>
	</Card.Header>
	<Card.Content class="grid grid-cols-[repeat(auto-fit,minmax(35ch,1fr))] gap-2">
		{#each variants as variant}
			<Card.Root>
				<Card.Header>
					<Card.Title>{variant}</Card.Title>
				</Card.Header>
				<Card.Content class="flex flex-col gap-1">
					<div class="flex items-center justify-center gap-2">
						{#each sizes as size}
							<Button {variant} {size}>{size}</Button>
						{/each}
					</div>
					<div class="flex items-center justify-center gap-2">
						{#each sizes as size}
							<Button {variant} {size} disabled>{size}</Button>
						{/each}
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</Card.Content>
</Card.Root>
