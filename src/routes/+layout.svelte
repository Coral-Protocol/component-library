<script lang="ts">
	import { Toaster } from '$ui/sonner/index.js';
	import { ModeWatcher } from 'mode-watcher';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Coral Console</title>
</svelte:head>

<ModeWatcher />
<Toaster />

{@render children()}
