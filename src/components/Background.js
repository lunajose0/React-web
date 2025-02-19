import React from "react";
import { motion } from "framer-motion";

function Background() {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        background:"linear-gradient(45deg, #ff00ff, #00ffff, #ffcc00, #ff00ff,rgb(195, 240, 35))",
        backgroundSize: "300% 300%",
        zIndex: -1,
      }}
    />
  );
}

export default Background;
