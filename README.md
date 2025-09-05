# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

## Using this example

Run the following command:

```sh
npx create-turbo@latest
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app
- `web`: another [Next.js](https://nextjs.org/) app
- `@side-ui/ui`: a stub React component library shared by both `web` and `docs` applications
- `@side-ui/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@side-ui/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build
yarn dlx turbo build
pnpm exec turbo build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo build --filter=docs

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo build --filter=docs
yarn exec turbo build --filter=docs
pnpm exec turbo build --filter=docs
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev
yarn exec turbo dev
pnpm exec turbo dev
```

You can develop a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo dev --filter=web

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo dev --filter=web
yarn exec turbo dev --filter=web
pnpm exec turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Releasing packages to npm

This repo is set up to publish UI packages (e.g. `packages/ui/button`) to the npm registry using Changesets and GitHub Actions. Below is a concise, end‑to‑end guide covering manual releases and CI releases.

### Prerequisites

- Account on npm and ownership of the package scope you intend to use.
  - Example scope used here: `@side-ui`. If you don’t own it, either create an organization named `side-ui` on npm (which gives you the `@side-ui` scope), use a scope you control (e.g. `@your-username`), or publish unscoped (e.g. `side-ui-button`).
- Create an npm token with publish permissions.
  - Recommended: an Automation token (or Granular Access Token with publish permission) so CI can publish without OTP prompts.
  - In GitHub repository settings, add the token as a repository secret named `SIDE_UI_NPM_TOKEN`.

### Manual publish (local)

Use this when you want to publish from your machine.

1. Build

```bash
pnpm install
pnpm -r run build
```

2. Authenticate with npm in the package directory (token scoped to the project)

```bash
cd packages/ui/button
# Use your env var containing the npm token
npm config set //registry.npmjs.org/:_authToken=$SIDE_UI_NPM_TOKEN --location=project
npm whoami
```

3. Optional sanity checks

```bash
pnpm publish --dry-run --access public
pnpm pack
```

4. Publish

```bash
pnpm publish --access public
# If your token enforces OTP, use:
# pnpm publish --access public --otp 123456
```

5. Verify

```bash
pnpm info @side-ui/button
```

### Versioning & changelogs (Changesets)

We use Changesets for version bumps and changelogs.

```bash
# Create a changeset (select affected packages and bump type)
pnpm changeset

# Apply versions and write changelogs
pnpm run version-packages
git add -A && git commit -m "chore(release): version packages"

# Optional local publish of all changed packages
pnpm run release
```

#### What you'll see when running `pnpm changeset`

```text
🦋  Which packages would you like to include? …
 ◉ @side-ui/button
 ◯ (other packages if present)

🦋  What kind of change is this for @side-ui/button? …
 ◉ patch
 ◯ minor
 ◯ major

🦋  Please enter a summary for this change (this will be in the changelog):
  Fix hover color for ghost variant

🦋  Would you like to modify generated changelog entry? (y/N)
  N

🦋  Changeset added! - you can now open a PR
```

This creates a file under `./.changeset/*.md` with your selections.

#### What happens when running `pnpm run version-packages`

```text
> side-ui.v2@ version-packages
> changeset version

🦋  info Packages to be bumped at patch
   @side-ui/button

🦋  info Updating version for packages
   @side-ui/button@0.1.1

🦋  info Updating CHANGELOG.md for packages
   packages/ui/button/CHANGELOG.md

🦋  All files have been updated. Review them and commit at your leisure
```

This command:

- Reads pending changesets and computes next versions.
- Updates `package.json` versions for affected packages.
- Generates/updates `CHANGELOG.md` per package.
- Removes consumed changeset files from `./.changeset`.
- Exits without committing; you must `git add` and `git commit`.

### CI release (GitHub Actions)

Publishing via CI is configured in `/.github/workflows/release.yml` using `changesets/action`.

- Setup once in GitHub:
  - Repository → Settings → Secrets and variables → Actions → New repository secret
  - Name: `SIDE_UI_NPM_TOKEN`, Value: your npm token
- Flow per release:
  - Open a PR with a Changeset (`pnpm changeset`).
  - Merge to `main`.
  - The workflow will either open a Release PR (if multiple changesets are pending) or publish directly to npm (using `NPM_TOKEN` sourced from `secrets.SIDE_UI_NPM_TOKEN`).

### Adding a new UI package

For a new package under `packages/ui/<name>`:

1. Create the folder and add:

- `src/` with your component(s)
- `package.json` (mirror the keys used by `@side-ui/button`)
- `tsconfig.json`:

```json
{
  "extends": "@side-ui/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "dist",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "verbatimModuleSyntax": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

2. Build & test locally:

```bash
pnpm -r run build
cd packages/ui/<name>
pnpm pack
```

3. Release via Changesets + CI or manual publish as above.

### Troubleshooting

- 404 Scope not found: You don’t own the scope (e.g. `@side-ui`). Create the org on npm or rename the package to a scope you control.
- 403/401 unauthorized: Ensure the token is valid and configured. `npm whoami` should succeed in the package directory after setting the token.
- 2FA prompts: Use an Automation token for CI. Locally, pass `--otp <code>` when required.
- Version already exists: Bump a new version with Changesets (`pnpm changeset` → `pnpm run version-packages`).

### Recommended workflow

- Development:
  - Entire monorepo (non-cached/persistent):
    ```bash
    pnpm dev
    ```
  - Storybook only for `apps/preview`:
    ```bash
    pnpm exec turbo run dev --filter preview
    # or
    pnpm --filter preview dev
    ```

- Before opening a PR (can run in parallel; Turbo parallelizes):

  ```bash
  pnpm lint
  pnpm check-types
  pnpm -r run build
  ```

  - `lint` and `check-types` do not depend on `build`, but running `build` helps catch packaging issues.

- Versioning (Changesets):

  ```bash
  pnpm changeset                   # select packages and bump type
  pnpm run version-packages        # apply versions and write changelogs
  git add -A && git commit -m "chore(release): version packages"
  ```

  - Can run without a prior `build`, but recommended after lint/types/build.

- Local publish (manual):

  ```bash
  pnpm -r run build
  cd packages/ui/button
  npm config set //registry.npmjs.org/:_authToken=$SIDE_UI_NPM_TOKEN --location=project
  pnpm publish --access public
  pnpm info @side-ui/button
  ```

- CI publish (recommended):
  1. Open a PR with `pnpm changeset`.
  2. On merge to `main`, the workflow publishes using `SIDE_UI_NPM_TOKEN` (see GitHub Secrets).

- Parallelization notes (Turbo):
  - `build`, `lint`, and `check-types` can be launched together; Turbo caches and parallelizes.
  - In `turbo.json`, `build` has `dependsOn: ["^build"]`, so cross‑package order is guaranteed (dependencies first; independent tasks in parallel).

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
