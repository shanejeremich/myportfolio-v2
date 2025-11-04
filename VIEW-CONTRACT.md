View / Container / Hook pattern

This repository follows a view / container / hook pattern for components.

Rules

- View files: pure presentation. No imports of framework libraries (framer-motion, css modules, router, etc.).
  - Accepts `styles` (CSS module map), `motion` (framer-motion `motion` object), `variants`, and other props from container.
  - Provide safe defaults in the signature: `styles: s = {}`.
  - Render plain DOM elements when `motion` is not provided.
- Container files: import framework utilities (motion, styles, hooks) and forward them to view.
  - Be explicit about forwarded props. Prefer listing `motion`, `variants`, `styles`, `NavItem` instead of spreading `...rest`.
- Hook files: return pure data and variants. Keep side-effects inside hooks.

Best practices

- Document the expected props at the top of view files (see examples in this repo).
- Keep view components small and testable.
- When animations are required, container should always pass the `motion` object to the view.

Examples

- `Navbar/index.jsx` (container)
- `Navbar/NavbarView.jsx` (view)
- `Navbar/useNavbar.js` (hook)

Testing

- Views are trivial to unit-test as pure functions. Provide a mocked `motion` object when needed in tests.
