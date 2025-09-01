import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@repo/button";

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
		className: "bg-blue-500 text-white",
	},
};
