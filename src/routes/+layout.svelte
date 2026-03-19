<script lang="ts">
	import { Toaster } from '$ui/sonner/index.js';
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';

	import * as Tooltip from '@coral-os/component-library/components/ui/tooltip';

	let { children } = $props();
</script>

<svelte:head>
	<title>Coral Console</title>
</svelte:head>

<ModeWatcher />
<Toaster />
<Tooltip.Provider>
	{@render children()}
</Tooltip.Provider>
