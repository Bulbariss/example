import { motion } from "framer-motion";

const LetterPopUp = ({ text }) => {
  const transition = {
    duration: 0.8,
    ease: [0.6, 0.01, -0.05, 0.9],
  };
  const letter = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: { ...transition },
    },
  };

  const firstName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.02,
        staggerDirection: 1,
      },
    },
  };
  return (
    <motion.span
      className="overflow-hidden"
      initial="initial"
      animate="animate"
      variants={firstName}
    >
      {text.split("").map((char, i) => (
        <motion.span
          className={`relative ${/\s/.test(char) ? "" : "inline-block"}`}
          key={i}
          variants={letter}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default LetterPopUp;
