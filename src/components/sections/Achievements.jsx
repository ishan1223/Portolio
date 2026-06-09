import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <AnimatedSection id="achievements" className="py-16 sm:py-20 md:py-28 section-band">
      <div className="section-container">
        <SectionHeading
          label="Achievements"
          title="By the numbers"
          description="Metrics that reflect dedication, consistency, and continuous growth."
        />

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-5 sm:p-6 md:p-8 text-center border border-border/60 card-shadow card-elevate"
            >
              <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-accent tracking-tight">
                <AnimatedCounter value={item.value} suffix={item.suffix} inView={isInView} />
              </p>
              <p className="mt-2 text-xs sm:text-sm text-secondary">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
