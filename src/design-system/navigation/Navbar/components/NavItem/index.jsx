import NavItemView from "./NavItemView";
import useNavItem from "./useNavItem";

const NavItem = ({ children, className = "", href = "#", ...rest }) => {
  const { whileHover, whileTap } = useNavItem();
  return (
    <NavItemView
      className={className}
      href={href}
      whileHover={whileHover}
      whileTap={whileTap}
      {...rest}>
      {children}
    </NavItemView>
  );
};

export default NavItem;
