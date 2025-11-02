import { motion } from "framer-motion";

import NavItem from "./components/NavItem";
import NavbarView from "./NavbarView";
import useNavbar from "./useNavbar";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { fadeInUp, staggerContainer } = useNavbar();
  return (
    <NavbarView
      fadeInUp={fadeInUp}
      motion={motion}
      NavItem={NavItem}
      staggerContainer={staggerContainer}
      styles={styles}
    />
  );
};
export default Navbar;
