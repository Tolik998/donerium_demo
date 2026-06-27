"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 inset-x-0 z-40 lg:hidden"
        >
          <div className="bg-[#0f0f0f]/95 backdrop-blur-xl border-t border-white/5 px-4 py-3 pb-safe">
            <div className="flex gap-3 max-w-sm mx-auto">
              <a
                href="https://wa.me/77055107420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#F5C800] text-black font-bold text-sm py-3.5 rounded-2xl text-center hover:bg-[#FFD700] transition-colors"
              >
                Заказать
              </a>
              <a
                href="tel:+77055107420"
                className="flex-1 glass border border-white/10 text-white font-medium text-sm py-3.5 rounded-2xl text-center"
              >
                Позвонить
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
