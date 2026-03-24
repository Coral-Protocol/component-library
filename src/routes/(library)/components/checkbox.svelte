<script lang="ts">
	import { Checkbox } from '@coral-os/component-library/components/ui/checkbox';
	import { Label } from '@coral-os/component-library/components/ui/label';

	import * as Card from '$ui/card';
</script>

<Card.Root id="checkbox">
	<Card.Header>
		<Card.Title>Checkbox</Card.Title>
	</Card.Header>
	<Card.Content class="grid grid-cols-[repeat(auto-fit,minmax(35ch,1fr))] gap-2">
		<div class="flex flex-col gap-6">
			<div class="flex items-center gap-3">
				<Checkbox id="terms" />
				<Label for="terms">Accept terms and conditions</Label>
			</div>
			<div class="flex items-start gap-3">
				<Checkbox id="terms-2" checked />
				<div class="grid gap-2">
					<Label for="terms-2">Accept terms and conditions</Label>
					<p class="text-sm text-muted-foreground">
						By clicking this checkbox, you agree to the terms and conditions.
					</p>
				</div>
			</div>
			<div class="flex items-start gap-3">
				<Checkbox id="toggle" disabled />
				<Label for="toggle">Enable notifications</Label>
			</div>
		</div>
	</Card.Content>
</Card.Root>
