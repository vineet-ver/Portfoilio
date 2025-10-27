'use client';
import { Box } from '@mui/material';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import TechStack from '@/components/TechStack';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <TechStack />
      <Resume />
      <Contact />
      <Footer />
    </Box>
  );
}
