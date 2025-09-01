import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@repo/button";

const meta = {
	title: "UI Components/Button",
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
		className: "bg-red-500 text-white",
	},
};
