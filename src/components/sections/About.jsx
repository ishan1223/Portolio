import { motion } from "framer-motion";
import { personalInfo } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <AnimatedSection id="about" className="py-16 sm:py-20 md:py-28 section-band">
      <div className="section-container">
        <SectionHeading
          label="About"
          title="Engineer at heart, builder by nature"
          description="I believe great software is born from curiosity, discipline, and a relentless focus on the user."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {personalInfo.about.map((paragraph, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-card rounded-2xl p-6 sm:p-8 card-shadow border border-border/60 card-elevate"
            >
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                <span className="text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-secondary leading-relaxed text-[15px]">
                {paragraph}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
