export const FadeUp = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0,
      delay: 0.2,
      ease: [0.175, 0.885, 0.32, 1],
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
  },
};
