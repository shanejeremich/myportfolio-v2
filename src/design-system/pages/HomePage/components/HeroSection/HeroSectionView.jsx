const HeroSectionView = ({ ROUTES, motion, styles: s }) => {
  return (
    <motion.section
      className={s.heroSection}
      animate={{ opacity: 1 }}
      id={ROUTES.HOME.id}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}>
      <div className={s.container}>
        <motion.div className={s.content}>
          <motion.div className={s.badge}>
            <span> 👋 Hi, my name is</span>
          </motion.div>
          <motion.h1 className="glitch">Shane Jeremich</motion.h1>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSectionView;
