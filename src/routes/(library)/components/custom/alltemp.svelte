<script>
	import * as Card from '$lib/components/ui/card/index.js';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as Select from '$lib/components/ui/select/index.js';
	import * as Command from '$lib/components/ui/command/index.js';
	import * as Menubar from '$lib/components/ui/menubar/index.js';
	import * as Popover from '$lib/components/ui/popover/index.js';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import { Skeleton } from '$lib/components/ui/skeleton/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { TooltipLabel } from '@coral-os/component-library';
</script>

<section class="grid gap-10">
	<!-- CARD -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Card</h2>
		<Card.Root>
			<Card.Header>
				<Card.Title>Card Title</Card.Title>
				<Card.Description>Card Description</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>Card Content</p>
			</Card.Content>
			<Card.Footer>
				<p>Card Footer</p>
			</Card.Footer>
		</Card.Root>
	</div>

	<!-- TABS -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Tabs</h2>
		<Tabs.Root value="account" class="w-[400px]">
			<Tabs.List>
				<Tabs.Trigger value="account">Account</Tabs.Trigger>
				<Tabs.Trigger value="password">Password</Tabs.Trigger>
			</Tabs.List>
			<Tabs.Content value="account">Make changes to your account here.</Tabs.Content>
			<Tabs.Content value="password">Change your password here.</Tabs.Content>
		</Tabs.Root>
	</div>

	<!-- ALERT -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Alert</h2>
		<Alert.Root>
			<Alert.Title>Heads up!</Alert.Title>
			<Alert.Description>You can add components to your app using the CLI.</Alert.Description>
		</Alert.Root>
	</div>

	<!-- BADGES -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Badge</h2>
		<div class="flex flex-wrap gap-2">
			<Badge>Default</Badge>
			<Badge variant="destructive">Destructive</Badge>
			<Badge variant="outline">Outline</Badge>
			<Badge variant="secondary">Secondary</Badge>
		</div>
	</div>

	<!-- INPUT -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Input</h2>
		<div class="space-y-2">
			<Label for="email">Email address</Label>
			<Input id="email" placeholder="you@example.com" />
		</div>
	</div>

	<!-- SHEET -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Sheet</h2>
		<Sheet.Root>
			<Sheet.Trigger>Open Sheet</Sheet.Trigger>
			<Sheet.Content>
				<Sheet.Header>
					<Sheet.Title>Confirm Action</Sheet.Title>
					<Sheet.Description>This action cannot be undone.</Sheet.Description>
				</Sheet.Header>
			</Sheet.Content>
		</Sheet.Root>
	</div>

	<!-- TABLE -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Table</h2>
		<Table.Root>
			<Table.Caption>Recent invoices</Table.Caption>
			<Table.Header>
				<Table.Row>
					<Table.Head>Invoice</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Method</Table.Head>
					<Table.Head class="text-right">Amount</Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell>INV001</Table.Cell>
					<Table.Cell>Paid</Table.Cell>
					<Table.Cell>Card</Table.Cell>
					<Table.Cell class="text-right">0.00</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</div>

	<!-- AVATAR -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Avatar</h2>
		<Avatar.Root>
			<Avatar.Image src="https://github.com/shadcn.png" alt="Avatar" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
		<Avatar.Root>
			<Avatar.Image src="" alt="Avatar" />
			<Avatar.Fallback>CN</Avatar.Fallback>
		</Avatar.Root>
	</div>

	<!-- DIALOG -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Dialog</h2>
		<Dialog.Root>
			<Dialog.Trigger>Open Dialog</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>Confirm deletion</Dialog.Title>
					<Dialog.Description>This action cannot be undone.</Dialog.Description>
				</Dialog.Header>
			</Dialog.Content>
		</Dialog.Root>
	</div>

	<!-- SELECT -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Select</h2>
		<Select.Root type="single">
			<Select.Trigger class="w-[180px]" placeholder="Choose theme" />
			<Select.Content>
				<Select.Item value="light">Light</Select.Item>
				<Select.Item value="dark">Dark</Select.Item>
				<Select.Item value="system">System</Select.Item>
			</Select.Content>
		</Select.Root>
	</div>

	<!-- COMMAND -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Command</h2>
		<Command.Root>
			<Command.Input placeholder="Search..." />
			<Command.List>
				<Command.Empty>No results found.</Command.Empty>
				<Command.Group heading="Suggestions">
					<Command.Item>Calendar</Command.Item>
					<Command.Item>Calculator</Command.Item>
				</Command.Group>
			</Command.List>
		</Command.Root>
	</div>

	<!-- MENUBAR -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Menubar</h2>
		<Menubar.Root>
			<Menubar.Menu>
				<Menubar.Trigger>File</Menubar.Trigger>
				<Menubar.Content>
					<Menubar.Item>New Tab</Menubar.Item>
					<Menubar.Item>New Window</Menubar.Item>
					<Menubar.Separator />
					<Menubar.Item>Print</Menubar.Item>
				</Menubar.Content>
			</Menubar.Menu>
		</Menubar.Root>
	</div>

	<!-- POPOVER -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Popover</h2>
		<Popover.Root>
			<Popover.Trigger>Open Popover</Popover.Trigger>
			<Popover.Content>Popover content goes here.</Popover.Content>
		</Popover.Root>
	</div>

	<!-- TOOLTIP -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Tooltip</h2>
		<Tooltip.Provider>
			<Tooltip.Root>
				<Tooltip.Trigger>Hover me</Tooltip.Trigger>
				<Tooltip.Content>
					<p>Helpful tooltip text</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</Tooltip.Provider>
	</div>

	<!-- SKELETON -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Skeleton</h2>
		<Skeleton class="h-[20px] w-[120px] rounded-full" />
	</div>

	<!-- TEXTAREA -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Textarea</h2>
		<Textarea placeholder="Type something..." />
	</div>

	<!-- DROPDOWN MENU -->
	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Dropdown Menu</h2>
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.Label>My Account</DropdownMenu.Label>
					<DropdownMenu.Separator />
					<DropdownMenu.Item>Profile</DropdownMenu.Item>
					<DropdownMenu.Item>Billing</DropdownMenu.Item>
					<DropdownMenu.Item>Team</DropdownMenu.Item>
					<DropdownMenu.Item>Subscription</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>

	<div class="space-y-3">
		<h2 class="text-lg font-semibold">Custom TooltipLabel comp</h2>
		<p>Description</p>
		<TooltipLabel
			tooltip={'Optional agent description shared with other agents'}
			class="m-0 max-w-1/4"
			>Description
		</TooltipLabel>
	</div>

	<div class="space-y-3">
		<Label class="truncate">"p", "g", "y", "q"</Label>
		<TooltipLabel
			title="Force kill agent"
			tooltip="If this is true, the agent will be killed immediately. If this is false, the agent will only be killed if the claim requests for automatic closing."
			extra={{
				required: true,
				type: 'boolean'
			}}
			class="max-w-1/4 min-w-1/4 "
		>
			"p", "g", "y", "q"
		</TooltipLabel>
	</div>
</section>
