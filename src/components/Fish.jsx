import { motion } from "motion/react";
import "./Fish.css";

function Fish({ image, nickname, x, y, delay = 0 }) {
  return (
    <motion.div
      className="fish"
      style={{ left: x, top: y }}
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <img src={image} alt="" className="fish-image" />
      <span className="fish-nickname">{nickname}</span>
    </motion.div>
  );
}

export default Fish;