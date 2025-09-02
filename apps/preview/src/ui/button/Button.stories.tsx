import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, ButtonAppearance, ButtonSize, ButtonVariant } from "@repo/button";

const meta = {
	title: "UI Components/Button",
	component: Button,
	args: {
		children: "Click me",
	},
	argTypes: {
    size: {
      control: 'select',
      options: Object.values(ButtonSize),
    },
    appearance: {
      control: 'select',
      options: Object.values(ButtonAppearance),
    },
    variant: {
      control: 'select',
      options: Object.values(ButtonVariant),
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		appearance: ButtonAppearance.contained,
		variant: ButtonVariant.neutral,
		size: ButtonSize.base,
	},
};
