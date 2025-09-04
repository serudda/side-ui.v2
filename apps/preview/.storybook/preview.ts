import type { Preview } from "@storybook/react-vite";
import { themes } from 'storybook/theming';
import "../src/index.css";

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.dark,
		},

		backgrounds: {
      options: {
        dark: { name: 'Dark', value: 'oklch(13% .028 261.692)' }, 
        light: { name: 'Light', value: '#ffffff' },
      },
    },

		initialGlobals: {
			backgrounds: { value: 'dark' },
		},

		options: {
      storySort: {
        order: ['Overview', 'Foundations', 'UI Components', '*'],
      },
    },

		actions: { argTypesRegex: "^on[A-Z].*" },
		layout: "centered",
	},
};

export default preview;
