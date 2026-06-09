import { personalInfo } from "../../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-secondary">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-sm text-secondary">
          Made with React &amp; Tailwind
        </p>
      </div>
    </footer>
  );
}
