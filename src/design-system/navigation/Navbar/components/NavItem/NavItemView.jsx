const NavItemView = ({
  children,
  className = "",
  href = "#",
  motion,
  variants,
  whileHover,
  whileTap,
  ...rest
}) => {
  if (motion) {
    const M = motion;
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
