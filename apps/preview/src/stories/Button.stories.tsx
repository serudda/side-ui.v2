import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta = {
	title: "Components/Button",
	component: Button,
	args: {
		children: "Click me",
		appName: "preview",
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		className:
			"px-3 py-2 rounded bg-black text-white hover:opacity-90 transition",
	},
};
