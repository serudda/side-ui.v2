// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import { config as reactInternal } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export default [...reactInternal, {
    ignores: ["dist/**"],
}, ...storybook.configs["flat/recommended"]];
