export const variantDefault = {
  hidden: {
    opacity: 0,
    x: "-20%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 100,
      duration: 0.5,
      damping: 10,
      ease: "easeOut",
    },
  },
};
