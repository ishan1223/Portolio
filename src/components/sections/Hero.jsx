import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { personalInfo } from "../../data/content";
import { useTypingEffect } from "../../hooks/useTypingEffect";
import Button from "../ui/Button";
import RecruiterQuickActions from "./RecruiterQuickActions";

export default function Hero() {
  const typedText = useTypingEffect(personalInfo.typingRoles);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center section-container pt-24 pb-12 md:pt-28 md:pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="order-2 lg:order-1"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-medium tracking-widest uppercase text-accent mb-4"
          >
            {personalInfo.name} · {personalInfo.title}
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-[1.12]">
            {personalInfo.heroTagline}
          </h1>

          <div className="mt-5 sm:mt-6 h-7 flex items-center min-w-0">
            <span className="text-sm sm:text-base md:text-lg text-secondary font-medium truncate">
              {typedText}
              <span className="inline-block w-[2px] h-5 bg-accent ml-0.5 animate-pulse align-middle" />
            </span>
          </div>

          <p className="mt-5 sm:mt-6 text-secondary text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            {personalInfo.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <Button variant="secondary" onClick={scrollToProjects}>
              View Projects
              <HiArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden card-shadow ring-1 ring-border/50">
              <img
                src={personalInfo.portrait}
                alt={`${personalInfo.name} portrait`}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.target.src = "/images/portrait-placeholder.svg";
                }}
              />
            </div>
            <div className="absolute -inset-3 sm:-inset-4 rounded-[2rem] border border-accent/10 -z-10" />
          </motion.div>
        </motion.div>
      </div>

      <RecruiterQuickActions />
    </section>
  );
}
