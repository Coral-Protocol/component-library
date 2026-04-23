<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	const colors = [
		'background',
		'foreground',
		'card',
		'card-foreground',
		'popover',
		'popover-foreground',
		'primary',
		'primary-foreground',
		'secondary',
		'secondary-foreground',
		'muted',
		'muted-foreground',
		'accent',
		'accent-foreground',
		'destructive',
		'border',
		'input',
		'ring',
		'sidebar',
		'sidebar-foreground',
		'sidebar-primary',
		'sidebar-primary-foreground',
		'sidebar-accent',
		'sidebar-accent-foreground',
		'telemetry-assistant',
		'telemetry-user',
		'telemetry-tool',
		'chart-1',
		'chart-2',
		'chart-3',
		'chart-4',
		'chart-5',
		'brand-primary',
		'brand-secondary'
	];
</script>

<div class="grid grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-6">
	{#each colors as color}
		<Tooltip.Root>
			<Tooltip.Trigger>
				<div class="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm">
					<div class="h-20 w-full" style={`background: var(--${color})`}></div>
					<div class="space-y-1 p-3">
						<p class="text-sm leading-none font-medium">
							{color}
						</p>
						<p class="text-xs break-all text-muted-foreground">
							var(--{color})
						</p>
					</div>
				</div>
			</Tooltip.Trigger>
			<Tooltip.Content>
				<p class="text-sm font-medium">
					var(--{color})
				</p>
				<p class="text-xs text-muted-foreground">
					{getComputedStyle(document.documentElement).getPropertyValue(`--${color}`).trim()}
				</p>
			</Tooltip.Content>
		</Tooltip.Root>
	{/each}
</div>

<style>
	div[style] {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		color: white;
		mix-blend-mode: difference;
	}
</style>
