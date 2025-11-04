import NavItemView from "./NavItemView";
import useNavItem from "./useNavItem";

const NavItem = ({ children, className = "", href = "#", motion, variants }) => {
  const { whileHover, whileTap } = useNavItem();
  return (
    <NavItemView
      className={className}
      href={href}
      motion={motion}
      variants={variants}
      whileHover={whileHover}
      whileTap={whileTap}>
      {children}
    </NavItemView>
  );
};

export default NavItem;
