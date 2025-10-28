'use client';
import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Timeline from '@/components/Timeline';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import AIChatbot from '@/components/AIChatbot';

export default function Home() {
  return (
    <Box>
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <TechStack />
      <Timeline />
      <Resume />
      <Contact />
      <Footer />
      <AIChatbot />
    </Box>
  );
}
