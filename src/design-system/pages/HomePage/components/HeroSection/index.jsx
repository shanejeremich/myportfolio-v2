import { motion } from "framer-motion";

import ROUTES from "@config/routes";
import { fadeInUp, staggerContainer } from "@modules/core/utils/framer";

import HeroSectionView from "./HeroSectionView";

import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <HeroSectionView
      fadeInUp={fadeInUp}
      motion={motion}
      ROUTES={ROUTES}
      staggerContainer={staggerContainer}
      styles={styles}
    />
  );
};
export default HeroSection;
