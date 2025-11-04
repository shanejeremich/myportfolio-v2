import { motion } from "framer-motion";

import ROUTES from "@config/routes";

import HeroSectionView from "./HeroSectionView";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return <HeroSectionView motion={motion} ROUTES={ROUTES} styles={styles} />;
};
export default HeroSection;
