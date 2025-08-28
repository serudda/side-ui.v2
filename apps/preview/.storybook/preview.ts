import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		controls: { expanded: true },
		actions: { argTypesRegex: "^on[A-Z].*" },
		layout: "centered",
	},
};

export default preview;
