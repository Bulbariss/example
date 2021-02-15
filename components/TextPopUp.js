import { motion } from "framer-motion";
import { Fragment } from "react";

const TextPopUpStaggered = ({ text }) => {
  let textArray = text
    .split(
      /[\r\t\f\v \u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]/gm
    )
    .filter((i) => i !== "");
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
            <motion.span
              className="relative inline-block whitespace-pre-wrap"
              variants={letter}
            >
              {char.replace("\n", "")}
              {i !== textArray.length - 1 && " "}
            </motion.span>
          </span>
          {char.includes("\n") && <br />}
        </Fragment>
      ))}
    </motion.span>
  );
};

export default TextPopUpStaggered;
