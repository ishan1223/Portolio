import { motion } from "framer-motion";

export default function SectionHeading({ label, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      {label && (
        <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-accent mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
