import Hero from './components/sections/Hero';
import SkillsMarquee from './components/sections/SkillsMarquee';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Services from './components/sections/Services';
import Certifications from './components/sections/Certifications';
import TechGrid from './components/sections/TechGrid';
import Partners from './components/sections/Partners';
import Reviews from './components/sections/Reviews';
import Footer from './components/sections/Footer';
import HostedProjects from './components/sections/HostedProjects'; // ඔබේ Featured Work එක
import GithubRepos from './components/sections/GithubRepos'; 
import Contact from './components/sections/Contact';// <--- අලුත් එක මෙතනට

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30 selection:text-white overflow-x-hidden font-sans">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <section id="hero"><Hero /></section>
        <SkillsMarquee />
        <section id="experience"> <Experience /> </section>
        <section id="projects"> <HostedProjects /> <GithubRepos /> </section>
        <Education />
        <section id="services"> <Services /> </section>
        <Certifications />
        <TechGrid />
        <Partners />
        <Reviews />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}