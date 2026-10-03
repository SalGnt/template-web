# Agent instructions

## Purpose

This is a reusable starting point for web UIs. Keep the template small, adaptable, and independent of a product domain. Add product features when requested; avoid speculative infrastructure or imposing one brand on every derived project.

These are repository defaults. Follow the user's explicit task and applicable instructions for the files you touch. Read current code and configuration; update stale guidance when changing the conventions it describes.

## Working approach

- Inspect relevant files and `git status` before editing. Preserve unrelated user changes.
- Carry implementation requests through verification. Make routine, reversible choices using existing conventions. Ask a focused question only when missing information materially changes the outcome or an action needs authorization.
- For substantial changes, briefly state the intended behavior and a small plan. Keep simple edits simple; create process documents only when useful or requested.
- Make the smallest coherent change that completes the task. Avoid unrelated refactors, upgrades, and abstractions for hypothetical needs.
- Check installed package types or official documentation when an API is uncertain. Do not assume APIs from another framework or package version.
- Keep secrets out of source, logs, and browser code. Treat `VITE_*` values as public. Privileged operations require a backend.

## Stack and architecture

- Use pnpm and retain `pnpm-lock.yaml`. Consult `package.json` for current versions and commands. Preserve the dependency policy in `pnpm-workspace.yaml`; do not relax it to bypass an installation failure.
- This is a client-rendered React + TypeScript app built with Vite. Introduce Next.js conventions, server components, or another router only for an explicitly requested migration.
- Use TanStack Router file routes in `src/routes`, the shared shell in `src/routes/__root.tsx`, and providers in `src/main.tsx`. Use typed router links for internal navigation.
- Never hand-edit `src/routeTree.gen.ts`. Change route sources and let the Vite router plugin regenerate it. Preserve the router plugin before the React plugin in `vite.config.ts`.
- Keep route-specific code near its route without accidentally creating extra file routes. Add reusable UI to `src/components` and shared utilities to `src/lib` when needed. Create directories only when they have a real use.
- Use TanStack Query for remote server state, local state for transient UI, and URL state for shareable navigation and filters where appropriate. Reuse the existing QueryClient.
- Give queries meaningful keys, handle request failures, and invalidate affected data after mutations. Avoid duplicating query results into local state without a concrete reason.

## React and TypeScript

- Use function components and hooks. Keep rendering pure and obey the Rules of Hooks.
- React Compiler is enabled. Start with straightforward code; add manual memoization for a demonstrated need or documented integration requirement.
- Derive values during rendering when possible. Use effects for synchronization with external systems and clean up subscriptions or other resources.
- Type domain data and component props, narrow unknown input, and use type-only imports for types. Do not hide errors with broad `any`, unchecked assertions, or lint suppressions.
- Keep components focused. Extract shared behavior when reuse or complexity justifies it; avoid universal components with many unrelated boolean props.

## UI conventions

- Use Tailwind CSS v4 and `src/index.css`. Define shared design tokens there when needed. Do not add a Tailwind v3 configuration or competing styling system by default.
- Use installed `@base-ui/react` primitives for complex accessible interactions such as dialogs and menus. Follow their actual API; do not assume Radix or shadcn APIs or add another library for an equivalent primitive.
- Follow the product's visual language and supplied references. For a new product, choose coherent spacing, typography, colors, and surfaces suited to its purpose. Keep shared choices in tokens or reusable components.
- Support narrow and wide viewports, long text, and real content. Avoid accidental horizontal overflow and fixed dimensions that break small screens.
- Use semantic landmarks, logical headings, native buttons and links, visible focus, accessible names, and associated form labels. Preserve keyboard navigation, dialog focus management, readable contrast, and reduced-motion preferences.
- Include relevant loading, empty, error, success, disabled, and pending states. Prevent duplicate submissions and provide actionable validation messages.
- Make every visible control perform its stated action. Clearly identify demo data; do not imply mocked persistence or requests are real integrations.

## Commands and verification

| Command                                   | Purpose                                                     |
| ----------------------------------------- | ----------------------------------------------------------- |
| `pnpm install --frozen-lockfile`          | Install the committed dependency set                        |
| `pnpm dev`                                | Run the development server                                  |
| `pnpm lint`                               | Run Oxlint                                                  |
| `pnpm test`                               | Run Vitest in watch mode                                    |
| `pnpm test:run`                           | Run the Vitest suite once                                   |
| `pnpm exec oxfmt --check <changed-files>` | Check formatting of selected files                          |
| `pnpm exec oxfmt <changed-files>`         | Format selected files                                       |
| `pnpm build`                              | Run TypeScript project checks and the production Vite build |
| `pnpm preview`                            | Serve the existing production build locally                 |

- Oxlint and Oxfmt are configured. Do not add ESLint or Prettier configurations because dependencies or upstream examples mention them.
- Format only changed files. `pnpm fmt` formats broadly and can introduce unrelated changes.
- After code or configuration edits, run lint, targeted formatting checks, and build. For documentation-only edits, check formatting, links, and accuracy; an application build is not required.
- Vitest uses the shared Vite configuration with jsdom, React Testing Library, and jest-dom. Add `*.test.ts` or `*.test.tsx` under `src`, import Vitest APIs explicitly, and keep route tests outside `src/routes` to avoid creating file routes. Shared setup and route tests live in `src/test`. Run `pnpm test:run` for test changes and behavior needing regression coverage. Never report tests passed when only lint or build ran.
- For UI changes, use available browser tools to exercise the affected flow at narrow and wide sizes, keyboard interaction, and relevant failure states. Check the console. State when browser verification is unavailable.
- When adding routes, ensure the generated tree is current before the final build. TypeScript runs before Vite in the build script, so route generation may need a development-server run first.
- Review the final diff for unrelated changes, generated artifacts, and accidental secrets. Report what changed, checks actually run, and remaining limitations. Intended behavior alone is not verification.

## Derived projects

When asked to initialize a product, replace demo content and metadata and document the product scope, API contracts, environment setup, design choices, and deployment requirements as they become known. Keep durable shared conventions here and Claude-specific guidance in `CLAUDE.md`. Keep task transcripts and temporary plans out of these files.
