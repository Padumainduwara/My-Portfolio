import About from './components/sections/About';
import Hero from './components/sections/Hero';
import SkillsMarquee from './components/sections/SkillsMarquee';
import Experience from './components/sections/Experience';
import HostedProjects from './components/sections/HostedProjects';
import GithubRepos from './components/sections/GithubRepos';
import Education from './components/sections/Education';
import Services from './components/sections/Services';
import Certifications from './components/sections/Certifications';
import TechGrid from './components/sections/TechGrid';
import Reviews from './components/sections/Reviews';
import Partners from './components/sections/Partners';
import Contact from './components/sections/Contact';

export const revalidate = 3600;

export default function Portfolio() {
  return (
    <main
      className="min-h-screen bg-[#020010] text-white selection:bg-purple-500/30 selection:text-white font-sans overflow-x-clip"
      itemScope
      itemType="https://schema.org/ProfilePage"
    >
      {/* Hidden SEO meta for schema connection */}
      <meta itemProp="name" content="Paduma Induwara — Portfolio" />
      <meta itemProp="description" content="Software Engineer & Data Scientist from Sri Lanka specializing in AI, Next.js, React, and 3D web experiences." />

      {/* Background Ambient Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10">
        <header id="hero" role="banner"><Hero /></header>

        <section id="skills" aria-label="Skills Marquee">
          <SkillsMarquee />
        </section>

        <section id="about" aria-label="About Section">
          <About />
        </section>

        <section id="experience" aria-label="Experience Section">
          <Experience />
        </section>

        <section id="hosted-projects" aria-label="Hosted Projects Section">
          <HostedProjects />
        </section>

        <section id="opensource" aria-label="Open Source Section">
          <GithubRepos />
        </section>

        <section id="education" aria-label="Education Section">
          <Education />
        </section>

        <section id="services" aria-label="Services Section">
          <Services />
        </section>

        <section id="certifications" aria-label="Certifications Section">
          <Certifications />
        </section>

        <section id="tech-stack" aria-label="Tech Stack Section">
          <TechGrid />
        </section>

        <section id="partners" aria-label="Partners Section">
          <Partners />
        </section>

        <section id="reviews" aria-label="Reviews Section">
          <Reviews />
        </section>

        <section id="contact" aria-label="Contact Section">
          <Contact />
        </section>

        {/* ── SEO: Hidden Long-Form Content (visible to search engines only) ── */}
        <section
          aria-label="Extended Information"
          style={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          <h2>Paduma Induwara — Software Engineer and Data Scientist in Sri Lanka</h2>
          <p>
            Paduma Induwara is a world-class Software Engineer and Data Scientist based in Maharagama, Sri Lanka.
            Specializing in Artificial Intelligence, Machine Learning, Next.js, React, Python, TypeScript, and
            Full Stack Web Development. Founder of Kingxer Marketing Solutions. Available for freelance projects
            including web development, mobile app development, SEO optimization, digital marketing, AI integration,
            and custom software solutions. Services include modern web development, AI and automation, custom
            software development, digital marketing and branding, and search engine optimization. Certified by
            Google (Gemini), GitHub (Foundations), Microsoft (Responsible AI), UNICEF (Data Management), and
            Meta (Digital Marketing Associate). Alumni of Cardiff Metropolitan University (BSc Data Science),
            ICBT Campus (Higher Diploma in Computing), and University of Colombo School of Computing.
          </p>
        </section>
      </div>
    </main>
  );
}