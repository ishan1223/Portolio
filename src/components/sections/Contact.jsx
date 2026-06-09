import { motion } from "framer-motion";
import { HiMail, HiPhone } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { personalInfo } from "../../data/content";
import { downloadResume } from "../../utils/downloadResume";
import AnimatedSection from "../ui/AnimatedSection";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: HiMail,
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: personalInfo.linkedin,
    icon: FaLinkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "View GitHub Profile",
    href: personalInfo.github,
    icon: FaGithub,
    external: true,
  },
  {
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    icon: HiPhone,
  },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-16 sm:py-20 md:py-28 section-band">
      <div className="section-container">
        <SectionHeading
          label="Contact"
          title="Let's build something together"
          description="I'm open to internships, collaborations, and conversations about engineering and AI."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-card rounded-3xl p-6 sm:p-8 md:p-12 border border-border/60 card-shadow accent-glow text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border/60 hover:border-accent/25 transition-colors text-left group cursor-pointer card-elevate"
              >
                <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center border border-border/60 group-hover:border-accent/25 transition-colors">
                  <link.icon className="w-4 h-4 text-accent" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-secondary">{link.label}</p>
                  <p className="text-sm font-medium text-primary truncate">
                    {link.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={downloadResume}>
              <HiDownload className="w-4 h-4" />
              Download Resume
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${personalInfo.email}?subject=Let's Connect`}
            >
              <HiMail className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
