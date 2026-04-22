<script lang="ts">
	import Button from './components/button.svelte';
	import Checkbox from './components/checkbox.svelte';
	import ContextMenu from './components/context-menu.svelte';
	import Combobox from './components/custom/combobox.svelte';
	import Colors from './components/custom/colors.svelte';
	import Tabs from './components/tabs.svelte';
	import Accordion from './components/accordion.svelte';
</script>

<main class="mx-[5%] flex flex-col gap-8 py-8 lg:mx-auto lg:w-4/5">
	<Button />
	<Checkbox />
	<ContextMenu />
	<Tabs />
	<Accordion />
	<Combobox />
	<Colors />
</main>
