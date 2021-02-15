import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersect from "../utils/useIntersect";

const AnimationBox = ({
  className,
  variants,
  children,
  threshold = 0,
  triggerOnce = true,
}) => {
  const controls = useAnimation();
  const [ref, entry] = useIntersect({
    threshold: threshold,
  });
  let wasTriggered = useRef(false);

  useEffect(() => {
    if (entry.isIntersecting && (!wasTriggered.current || !triggerOnce)) {
      controls.start("visible");
      wasTriggered.current = true;
    }
    if (!entry.isIntersecting && (!wasTriggered.current || !triggerOnce)) {
      controls.start("hidden");
    }
  }, [controls, entry.isIntersecting]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimationBox;
