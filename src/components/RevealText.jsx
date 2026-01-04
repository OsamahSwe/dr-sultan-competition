import { motion } from "framer-motion";
import React from "react";

const REVEAL_ANIMATION_DURATION_S = 0.6;
const MILLISECONDS_TO_SECONDS = 1000;

const directionVariants = {
  up: { y: 24, opacity: 0 },
  down: { y: -24, opacity: 0 },
  left: { x: 24, opacity: 0 },
  right: { x: -24, opacity: 0 },
};

const RevealText = ({
  children,
  direction = "up",
  delay = 0,
  triggerOnView = false,
  className = "",
}) => {
  const animationProps = triggerOnView
    ? {
        initial: directionVariants[direction],
        whileInView: { x: 0, y: 0, opacity: 1 },
        viewport: { once: true },
      }
    : {
        initial: directionVariants[direction],
        animate: { x: 0, y: 0, opacity: 1 },
      };

  return (
    <motion.span
      {...animationProps}
      className={className}
      style={{ display: "inline-block" }}
      transition={{
        duration: REVEAL_ANIMATION_DURATION_S,
        delay: delay / MILLISECONDS_TO_SECONDS,
      }}
    >
      {children}
    </motion.span>
  );
};

export default RevealText;
