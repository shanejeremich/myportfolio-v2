Design system CSS guide

This folder contains global CSS used across the app. The intention is to keep a clear separation of concerns so contributors know where to add and find global styling primitives.

Files

- tokens.css

  - Purpose: design tokens (colors, spacing, breakpoints, type scale, radii).
  - Import this once at app bootstrap (in `src/main.jsx`) so components and global CSS can reference variables via `var(--name)`.
  - Example variables: `--color-primary`, `--color-text`, `--space-3`, `--bp-md`.

- base.css

  - Purpose: a pragmatic reset and base styles (box-sizing, spacing reset, accessibility helpers, reduced-motion media query, basic typographic helpers).
  - This file should be imported after `tokens.css` so it can use token variables.
  - Keep the reset minimal and prefer progressive enhancement for experimental features (e.g., `text-wrap`).

- globals.css

  - Purpose: site-wide, higher-level rules such as font-face imports, root-level theming helpers (color-scheme), scrollbar styling, selection color, or app-level layout rules.
  - Keep this file for things that are not component-specific and that do not belong in `base.css` (e.g., third-party library overrides).

- main.css
  - Purpose: legacy or project-specific global variables. We've standardized variable names here to match `tokens.css` naming conventions (e.g. `--color-primary`, `--color-bg`).
  - Over time, prefer adding new tokens to `tokens.css` rather than scattering them across files.

Guidelines

- Import order matters: `tokens.css` → `base.css` → `globals.css` (then your app). This ensures variables and resets are available to subsequent CSS.
- Tokens should be global (non-module). Do not define `:root` variables inside `.module.css` files unless you intentionally scope them.
- Component styles (CSS Modules) should reference tokens and contain component-specific responsive rules. Shared layout rules can live in `layout/` modules and be consumed by wrapper components.
- When adding new design variables, add them to `tokens.css` and document their intended use in this README.

Example import (in `src/main.jsx`)

import "@assets/styles/tokens.css"; // tokens first
import "@assets/styles/base.css"; // reset + base
import "@assets/styles/globals.css"; // site-level rules

Questions or changes

- If you want a migration script to rename older variables across the repo, ask and I can prepare a small codemod.
- If you prefer a different naming convention for tokens, we can standardize and apply across the repo.
