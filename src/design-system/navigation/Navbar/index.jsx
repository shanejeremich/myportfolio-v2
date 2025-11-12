import { motion } from "framer-motion";

import ROUTES from "@config/routes";

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
      ROUTES={ROUTES}
      staggerContainer={staggerContainer}
      styles={styles}
    />
  );
};
export default Navbar;
