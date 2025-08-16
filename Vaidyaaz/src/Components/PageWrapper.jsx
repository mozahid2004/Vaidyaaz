import React from "react";
import { motion } from "framer-motion";

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}   // start slightly smaller & invisible
      animate={{ opacity: 1, scale: 1 }}      // grow to full size & visible
      exit={{ opacity: 0, scale: 1.1 }}      // slightly enlarge & fade out
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};

export default PageWrapper;
