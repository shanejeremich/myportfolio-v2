const HeroSectionView = ({ ROUTES, fadeInUp, motion, staggerContainer, styles: s }) => {
  return (
    <motion.section
      className={s.heroSection}
      animate={{ opacity: 1 }}
      id={ROUTES.HOME.id}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}>
      <div className={s.container}>
        <motion.div
          className={s.content}
          animate="animate"
          initial="initial"
          variants={staggerContainer}>
          <motion.div className={s.badge}>
            <span> 👋 Hi, my name is</span>
          </motion.div>
          <motion.h1 className={s.glitch} variants={fadeInUp} whileHover={{ scale: 1.02 }}>
            Shane Jeremich
          </motion.h1>
          <motion.h2 className={s.subtitle} variants={fadeInUp}>
            Full Stack Web Developer
          </motion.h2>
          <motion.p className={s.description} variants={fadeInUp}>
            Full Stack Web Developer with expertise in React, NextJS, Node.js, and MongoDB. Proven
            ability to accelerate development workflows and collaborate with cross-functional teams
            to deliver scalable web applications. Passionate about creating efficient, user-centered
            digital experiences.
          </motion.p>

          <motion.div className={s.ctaButtons} variants={fadeInUp}>
            <motion.a
              href={ROUTES.PROJECTS.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <button className={s.primaryButton}>View Projects</button>
            </motion.a>
            <motion.a
              href={ROUTES.CONTACT.path}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}>
              <button className={s.secondaryButton}>Contact Me</button>
            </motion.a>
          </motion.div>
          <motion.div className={s.socialLinks} variants={staggerContainer}>
            <motion.a
              href="https://github.com/shanejeremich"
              rel="noopener noreferrer"
              target="_blank">
              <i className="fab fa-github"></i>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shanejeremich"
              rel="noopener noreferrer"
              target="_blank">
              <i className="fab fa-linkedin"></i>
            </motion.a>
            <motion.a
              href="https://twitter.com/shanejeremich"
              rel="noopener noreferrer"
              target="_blank">
              <i className="fab fa-twitter"></i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className={s.imageContainer}
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}></motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSectionView;
