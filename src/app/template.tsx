"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  // We use a premium fade and subtle slide up for our specific page transitions
  // This recreates the "smoothness" associated with Barba.js PJAX transitions.
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
      transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
