<script lang="ts">
	import { resolve } from '$app/paths';
	import { Button, buttonVariants } from '@coral-os/component-library/lib/components/ui/button';
	import * as Card from '@coral-os/component-library/lib/components/ui/card';
</script>

<main class="mx-auto flex w-4/5 flex-col">
	<a href={resolve('/demo/playwright')}>playwright</a>
	<Card.Root>
		<Card.Header>
			<Card.Title>Buttons</Card.Title>
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
</main>
