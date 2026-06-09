import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../data/content";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-16 sm:py-20 md:py-28 section-band">
      <div className="section-container">
        <SectionHeading
          label="Projects"
          title="Selected work"
          description="A collection of projects that showcase my approach to engineering, design, and problem solving."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border/60 card-shadow card-elevate"
            >
              <div className="relative h-52 sm:h-56 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = `/images/projects/placeholder-${(index % 4) + 1}.svg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-secondary text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-secondary bg-card rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-primary bg-surface rounded-xl border border-border/60 hover:border-accent/30 transition-colors cursor-pointer"
                  >
                    <FaGithub className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-accent rounded-xl hover:bg-accent/90 transition-colors cursor-pointer"
                  >
                    <HiExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
