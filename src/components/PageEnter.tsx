"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// A short brand-in transition that plays once on first load, then unmounts.
// Purely decorative — safe to delete this component + its usage in page.tsx
// if a buyer wants an instant page load instead.
export function PageEnter() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        >
          <motion.span
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="h-[2px] w-40 origin-left"
            style={{ background: "var(--gradient)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
