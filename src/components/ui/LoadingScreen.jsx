import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] flex items-center justify-center page-bg"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center"
            >
              <span className="text-white font-semibold text-lg">P</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-0.5 bg-border rounded-full overflow-hidden"
            >
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity }}
                className="h-full w-1/2 bg-accent rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
