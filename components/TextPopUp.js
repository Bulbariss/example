import { motion } from "framer-motion";
import { Fragment } from "react";

const TextPopUpStaggered = ({ text }) => {
  let textArray = text.split(/\s/gm).filter((i) => i !== "");
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
        delayChildren: 1.2,
        staggerChildren: 0.08,
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
      {textArray.map((char, i) => (
        <Fragment key={i}>
          <span className="relative inline-block overflow-hidden">
            <motion.span className="relative inline-block" variants={letter}>
              {char}
            </motion.span>
          </span>
          {i !== textArray.length && <span> </span>}
        </Fragment>
      ))}
    </motion.span>
  );
};

export default TextPopUpStaggered;
