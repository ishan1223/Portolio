import { personalInfo } from "../data/content";

export function downloadResume() {
  const link = document.createElement("a");
  link.href = personalInfo.resumePath;
  link.download = `${personalInfo.name.replace(/\s+/g, "_")}_Resume.pdf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
