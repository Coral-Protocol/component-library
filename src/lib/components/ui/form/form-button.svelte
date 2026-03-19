<script lang="ts">
	import * as Button from "@coral-os/component-library/components/ui/button/index.js";

	let { ref = $bindable(null), ...restProps }: Button.Props = $props();
</script>

<Button.Root bind:ref type="submit" {...restProps} />
