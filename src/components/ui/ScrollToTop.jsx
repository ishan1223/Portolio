import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 w-11 h-11 rounded-xl bg-accent text-white flex items-center justify-center card-shadow cursor-pointer"
        >
          <HiArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
