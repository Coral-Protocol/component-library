<script lang="ts">
	import { TooltipLabel } from '@coral-os/component-library';

	const cases = [
		{
			id: 'c1',
			name: 'Simple string type',
			meta: {
				type: 'string',
				required: true,
				display: { description: 'Basic string field' }
			}
		},
		{
			id: 'c2',
			name: 'Boolean extra flag',
			meta: {
				type: 'boolean',
				required: false,
				display: { description: 'Just a flag' }
			}
		},
		{
			id: 'c3',
			name: 'Object with value only',
			meta: {
				type: { value: 'string' },
				required: false,
				display: { description: 'Wrapped value object' }
			}
		},
		{
			id: 'c4',
			name: 'Object with hidden key',
			meta: {
				type: { value: 'string', showKey: false },
				required: false,
				display: { description: 'Should show only value' }
			}
		},
		{
			id: 'c5',
			name: 'Multiple extras',
			meta: {
				type: 'number',
				required: true,
				display: { description: 'Number field' }
			}
		},
		{
			id: 'c6',
			name: 'Missing description fallback',
			meta: {
				type: 'string',
				required: false,
				display: {}
			}
		},
		{
			id: 'c7',
			name: 'Null-ish type',
			meta: {
				type: undefined,
				required: true,
				display: { description: 'No type provided' }
			}
		},
		{
			id: 'c8',
			name: 'Complex object value',
			meta: {
				type: { value: 'email', showKey: true },
				required: false,
				display: { description: 'Email format field' }
			}
		}
	];
</script>

Tooltip tests
<div class="flex gap-4 p-6">
	{#each cases as c}
		<TooltipLabel
			title={c.name}
			for={c.id}
			tooltip={c.meta.display?.description ?? 'No description provided.'}
			extra={{
				required: c.meta.required ?? false,
				...(c.meta.type !== undefined ? { type: c.meta.type } : {})
			}}
		>
			<span id={c.id} class="cursor-help underline"> Hover me </span>
		</TooltipLabel>
	{/each}
</div>
