import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from "@storybook/react-vite";

const require = createRequire(import.meta.url);

const config: StorybookConfig = {
	framework: {
		name: getAbsolutePath("@storybook/react-vite"),
		options: {},
	},
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: [
		getAbsolutePath("@storybook/addon-a11y"),
		getAbsolutePath("@storybook/addon-themes"),
		getAbsolutePath("@storybook/addon-docs"),
		getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@chromatic-com/storybook'),
	],
	docs: {
		defaultName: "Docs",
	},
};

export default config;

function getAbsolutePath(value: string): string {
	return dirname(require.resolve(join(value, "package.json")));
}
