import { motion } from "framer-motion";

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent/90 border border-accent/80 shadow-sm shadow-accent/10",
  secondary:
    "bg-transparent text-primary border border-border hover:bg-card hover:border-accent/30",
  ghost: "bg-transparent text-primary hover:bg-card",
  accent:
    "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15",
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
  href,
  download,
  type = "button",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 text-sm font-medium rounded-xl transition-colors duration-300 cursor-pointer";

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      download={download}
      type={href ? undefined : type}
      onClick={onClick}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
