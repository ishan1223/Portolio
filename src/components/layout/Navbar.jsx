import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { HiMoon, HiSun } from "react-icons/hi2";
import { navLinks } from "../../data/content";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.id));
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (id) => {
    setIsMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass card-shadow" : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        <motion.button
          onClick={() => handleNavClick("home")}
          whileHover={{ scale: 1.02 }}
          className="text-lg font-semibold tracking-tight text-primary cursor-pointer"
        >
          Portfolio
        </motion.button>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                activeSection === link.id
                  ? "text-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-xl flex items-center justify-center text-primary hover:bg-card transition-colors cursor-pointer"
          >
            {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
          </motion.button>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-primary hover:bg-card transition-colors cursor-pointer"
          >
            {isMobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:hidden glass border-t border-border/50 overflow-hidden"
          >
            <div className="section-container py-6 flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? "bg-card text-primary"
                      : "text-secondary hover:text-primary hover:bg-card"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
