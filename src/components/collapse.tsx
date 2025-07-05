"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface CollapseProps {
  isOpen: boolean;
  children: React.ReactNode;
  duration?: number;
  className?: string;
}

export const Collapse = ({
  isOpen,
  children,
  className = "",
  duration = 0.3,
}: CollapseProps) => {
  return (
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <motion.div
          className={className}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{
            duration,
            ease: [0.4, 0.0, 0.2, 1],
            height: { duration },
            opacity: { duration: duration * 0.7 },
          }}
          style={{ overflow: "hidden" }}
        >
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            exit={{ y: -10 }}
            transition={{
              duration: duration * 0.6,
              ease: [0.4, 0.0, 0.2, 1],
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
