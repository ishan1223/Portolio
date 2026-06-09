import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import LinkedIn from "./components/sections/LinkedIn";
import LeetCode from "./components/sections/LeetCode";
import Experience from "./components/sections/Experience";
import Achievements from "./components/sections/Achievements";
import GitHub from "./components/sections/GitHub";
import Contact from "./components/sections/Contact";
import LoadingScreen from "./components/ui/LoadingScreen";
import ScrollProgress from "./components/ui/ScrollProgress";
import ScrollToTop from "./components/ui/ScrollToTop";
import CursorGlow from "./components/ui/CursorGlow";
import { ThemeProvider } from "./context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <LoadingScreen />
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LinkedIn />
        <LeetCode />
        <Experience />
        <Achievements />
        <GitHub />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </ThemeProvider>
  );
}
