import { motion } from "framer-motion";
import { skills } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="py-16 sm:py-20 md:py-28">
      <div className="section-container">
        <SectionHeading
          label="Skills"
          title="Technologies I work with"
          description="A curated toolkit for building reliable, intelligent, and scalable applications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-card rounded-2xl p-6 sm:p-7 border border-border/60 card-shadow card-elevate cursor-default"
            >
              <h3 className="text-lg font-semibold text-primary mb-5">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-medium text-secondary bg-surface rounded-lg border border-border/60 group-hover:border-accent/20 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
