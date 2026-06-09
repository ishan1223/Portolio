import { motion } from "framer-motion";
import {
  HiDownload,
  HiMail,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { personalInfo } from "../../data/content";
import { downloadResume } from "../../utils/downloadResume";

const actions = [
  {
    label: "Download Resume",
    icon: HiDownload,
    onClick: downloadResume,
    primary: true,
  },
  {
    label: "View LinkedIn",
    icon: FaLinkedin,
    href: personalInfo.linkedin,
    external: true,
  },
  {
    label: "View GitHub",
    icon: FaGithub,
    href: personalInfo.github,
    external: true,
  },
  {
    label: "View LeetCode",
    icon: SiLeetcode,
    href: personalInfo.leetcode,
    external: true,
  },
  {
    label: "Contact Me",
    icon: HiMail,
    href: `mailto:${personalInfo.email}?subject=Internship Inquiry`,
  },
];

export default function RecruiterQuickActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="w-full mt-10 lg:mt-12"
    >
      <div className="bg-card rounded-2xl border border-border/60 card-shadow accent-glow p-5 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5 sm:mb-6">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-accent mb-1">
              Recruiter Quick Actions
            </p>
            <p className="text-sm text-secondary">
              Everything you need — in one place.
            </p>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-secondary bg-surface px-3 py-1.5 rounded-lg border border-border/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to internships
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {actions.map((action, index) => {
            const Icon = action.icon;
            const baseClass =
              "group flex flex-col items-center justify-center gap-2.5 p-4 sm:p-5 rounded-xl border transition-all duration-300 cursor-pointer text-center min-h-[88px] sm:min-h-[96px]";
            const styleClass = action.primary
              ? "bg-accent text-white border-accent/80 hover:bg-accent/90 card-elevate"
              : "bg-surface/50 text-primary border-border/50 hover:border-accent/30 hover:bg-card card-elevate";

            const content = (
              <>
                <Icon
                  className={`w-5 h-5 ${action.primary ? "text-white" : "text-accent group-hover:scale-110 transition-transform duration-300"}`}
                />
                <span className="text-xs sm:text-sm font-medium leading-tight">
                  {action.label}
                </span>
                {action.external && (
                  <HiExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-60 absolute top-3 right-3 transition-opacity hidden sm:block" />
                )}
              </>
            );

            return action.href ? (
              <motion.a
                key={action.label}
                href={action.href}
                target={action.external ? "_blank" : undefined}
                rel={action.external ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                className={`relative ${baseClass} ${styleClass}`}
              >
                {content}
              </motion.a>
            ) : (
              <motion.button
                key={action.label}
                onClick={action.onClick}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                className={`relative ${baseClass} ${styleClass}`}
              >
                {content}
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
