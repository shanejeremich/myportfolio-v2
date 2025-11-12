const NavbarView = ({ NavItem, ROUTES, fadeInUp, motion, staggerContainer, styles: s = {} }) => (
  <motion.nav
    className={s.navbar}
    animate={{ y: 0 }}
    initial={{ y: -100 }}
    transition={{ duration: 0.6, ease: "easeOut" }}>
    <motion.div className={s.logo} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.95 }}>
      Portfolio
    </motion.div>

    <motion.ul
      className={s.navLinks}
      animate="animate"
      initial="initial"
      variants={staggerContainer}>
      <NavItem href={ROUTES.HOME.path} motion={motion} variants={fadeInUp}>
        Home
      </NavItem>
      <NavItem href={ROUTES.ABOUT.path} motion={motion} variants={fadeInUp}>
        About
      </NavItem>
      <NavItem href={ROUTES.PROJECTS.path} motion={motion} variants={fadeInUp}>
        Projects
      </NavItem>
      <NavItem href={ROUTES.CONTACT.path} motion={motion} variants={fadeInUp}>
        Contact
      </NavItem>
    </motion.ul>
  </motion.nav>
);

export default NavbarView;
