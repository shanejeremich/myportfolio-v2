Test skeleton for NavItemView

This is a small test skeleton demonstrating how to test the view under the view/container/hook pattern.

You can use Jest + React Testing Library or Vitest. This repo does not currently have test dependencies, so install them first:

npm install --save-dev vitest @testing-library/react @testing-library/jest-dom

Example (Vitest + RTL):

```jsx
import { render, screen } from "@testing-library/react";
import NavItemView from "../src/design-system/navigation/Navbar/components/NavItem/NavItemView";

// A minimal mocked `motion` object with `li` that behaves like a component
const MockMotion = {
  li: ({ children, ...props }) => {
    return <li {...props}>{children}</li>;
  },
};

test("renders plain li when no motion provided", () => {
  render(<NavItemView className="foo">Hello</NavItemView>);
  expect(screen.getByText("Hello").closest("li")).toHaveClass("foo");
});

test("renders motion.li when motion provided", () => {
  render(<NavItemView motion={MockMotion}>Hello</NavItemView>);
  expect(screen.getByText("Hello").closest("li")).toBeInTheDocument();
});
```

Notes

- This file is a guide; run `npx vitest` to execute tests after installing dependencies and adding a test script.
