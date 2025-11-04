/**
 * NavItemView (view)
 * - Pure presentation component: no imports of framework utilities.
 * - Expected props (from container):
 *   - motion: framer-motion `motion` object (optional)
 *   - variants: motion variants object for the child
 *   - whileHover / whileTap: interaction props from hook
 *   - className, href, children
 *
 * Behavior:
 * - If `motion` is provided, renders `motion.li` and forwards animation props.
 * - Otherwise renders a plain `li` so the view has no runtime dependency on framer-motion.
 */

const NavItemView = ({
  children,
  className = "",
  href = "#",
  motion: M,
  variants,
  whileHover,
  whileTap,
  ...rest
}) => {
  if (M) {
    return (
      <M.li
        className={className}
        variants={variants}
        whileHover={whileHover}
        whileTap={whileTap}
        {...rest}>
        {href ? <a href={href}>{children}</a> : children}
      </M.li>
    );
  }

  return (
    <li className={className} {...rest}>
      {href ? <a href={href}>{children}</a> : children}
    </li>
  );
};

export default NavItemView;
