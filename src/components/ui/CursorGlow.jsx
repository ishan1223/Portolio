import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[1] w-[500px] h-[500px] rounded-full text-accent opacity-[0.06] dark:opacity-[0.08]"
      style={{
        background: "radial-gradient(circle, currentColor 0%, transparent 70%)",
        left: position.x - 250,
        top: position.y - 250,
      }}
      animate={{ left: position.x - 250, top: position.y - 250 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
}
