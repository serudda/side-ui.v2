import type { Preview } from "@storybook/react-vite";
import { themes } from 'storybook/theming';
import "../src/index.css";

const preview: Preview = {
	parameters: {
		docs: {
			theme: themes.dark,
		},
		backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#000000',
        },
        {
          name: 'white',
          value: '#FFFFFF',
        },
      ],
    },

		options: {
      storySort: {
        order: ['Overview', 'Foundations', 'UI Components', '*'],
      },
    },

		controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
			expanded: true,
    },
		actions: { argTypesRegex: "^on[A-Z].*" },
		layout: "centered",
	},
};

export default preview;
