<script lang="ts">
	import { Button, buttonVariants } from '$ui/button';
	import * as Card from '$ui/card';
</script>

<Card.Root id="button">
	<Card.Header>
		<Card.Title>Button</Card.Title>
	</Card.Header>
	<Card.Content class="grid grid-cols-[repeat(auto-fit,minmax(35ch,1fr))] gap-2">
		{#each Object.keys(buttonVariants.variants.variant) as (keyof typeof buttonVariants.variants.variant)[] as variant}
			<Card.Root>
				<Card.Header>
					<Card.Title>{variant}</Card.Title>
				</Card.Header>
				<Card.Content class="flex items-center justify-center gap-2">
					{#each Object.keys(buttonVariants.variants.size) as (keyof typeof buttonVariants.variants.size)[] as size}
						<Button {variant} {size}>{size}</Button>
					{/each}
				</Card.Content>
			</Card.Root>
		{/each}
	</Card.Content>
</Card.Root>
