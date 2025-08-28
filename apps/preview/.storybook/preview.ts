import type { Preview } from "@storybook/react-vite";

const preview: Preview = {
	parameters: {
		controls: { expanded: true },
		actions: { argTypesRegex: "^on[A-Z].*" },
		layout: "centered",
	},
};

export default preview;
