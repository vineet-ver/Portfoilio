'use client';
import { Box, Container, Typography, Button, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        position: 'relative',
        overflow: 'hidden',
        pt: 8,
      }}
    >
      {/* Animated background orbs */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)',
          top: '-300px',
          right: '-300px',
          filter: 'blur(80px)',
        }}
      />
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        sx={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(187,134,252,0.15) 0%, transparent 70%)',
          bottom: '-250px',
          left: '-250px',
          filter: 'blur(80px)',
        }}
      />

      {/* Cyber grid background */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
            gap: 6,
            alignItems: 'center',
          }}
        >
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'primary.main',
                mb: 2,
                fontWeight: 500,
                fontFamily: 'Orbitron',
                letterSpacing: '0.1em',
              }}
            >
              {'<> WELCOME TO MY DIGITAL SPACE />'}
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: 'text.secondary',
                mb: 1,
                fontSize: '1.2rem',
              }}
            >
              Hello, I&apos;m
            </Typography>

            <Typography
              variant="h1"
              component={motion.h1}
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 212, 255, 0.5)',
                  '0 0 40px rgba(0, 212, 255, 0.8)',
                  '0 0 20px rgba(0, 212, 255, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              sx={{
                mb: 2,
                background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 900,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                fontFamily: 'Orbitron',
              }}
            >
              VINEET VERMA
            </Typography>

            <Box sx={{ mb: 4, minHeight: '100px' }}>
              <TypeAnimation
                sequence={[
                  'Data Scientist',
                  2000,
                  'Machine Learning Engineer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'AI Engineer',
                  2000,
                  'Cybersecurity Expert',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                style={{
                  fontSize: '2rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Orbitron',
                  display: 'inline-block',
                }}
                repeat={Infinity}
              />
            </Box>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                color: 'text.secondary',
                maxWidth: '600px',
                fontSize: '1.1rem',
                lineHeight: 1.8,
              }}
            >
              Transforming data into actionable insights and building intelligent
              solutions with cutting-edge AI/ML technologies. Passionate about creating
              secure, scalable systems that push the boundaries of innovation.
            </Typography>

            {/* CTA Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => scrollToSection('projects')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: 'Orbitron',
                  }}
                >
                  View Projects
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<DownloadIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: 'Orbitron',
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection('contact')}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 600,
                    fontFamily: 'Orbitron',
                  }}
                >
                  Hire Me
                </Button>
              </motion.div>
            </Stack>

            {/* Social Icons */}
            <Stack direction="row" spacing={2}>
              {[
                { icon: <GitHubIcon />, url: 'https://github.com/vineet-ver', color: '#ffffff' },
                { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/vineet-verma-b80359250/', color: '#0077B5' },
                { icon: <TwitterIcon />, url: 'https://twitter.com/yourprofile', color: '#1DA1F2' },
              ].map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    href={social.url}
                    target="_blank"
                    sx={{
                      color: 'text.primary',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        color: social.color,
                        border: `2px solid ${social.color}`,
                        backgroundColor: `${social.color}15`,
                        boxShadow: `0 0 20px ${social.color}50`,
                      },
                    }}
                  >
                    {social.icon}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </motion.div>

          {/* Right Side - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Glowing rings */}
              <Box
                component={motion.div}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                sx={{
                  position: 'absolute',
                  width: '450px',
                  height: '450px',
                  border: '2px solid rgba(0, 212, 255, 0.3)',
                  borderRadius: '50%',
                  borderStyle: 'dashed',
                }}
              />
              <Box
                component={motion.div}
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                sx={{
                  position: 'absolute',
                  width: '500px',
                  height: '500px',
                  border: '2px solid rgba(187, 134, 252, 0.2)',
                  borderRadius: '50%',
                  borderStyle: 'dotted',
                }}
              />

              {/* Profile Image Container */}
              <Box
                component={motion.div}
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                sx={{
                  position: 'relative',
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(187, 134, 252, 0.2) 100%)',
                  padding: '8px',
                  boxShadow: '0 0 60px rgba(0, 212, 255, 0.4), 0 0 100px rgba(187, 134, 252, 0.3)',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(10, 14, 39, 0.8)',
                    backdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    border: '3px solid rgba(0, 212, 255, 0.5)',
                  }}
                >
                  {/* Placeholder for profile photo */}
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.1) 0%, rgba(187, 134, 252, 0.1) 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '6rem',
                      fontWeight: 800,
                      color: 'rgba(0, 212, 255, 0.3)',
                      fontFamily: 'Orbitron',
                    }}
                  >
                    VV
                  </Box>
                  {/* Replace the Box above with this when you have your photo:
                  <Image
                    src="/your-photo.jpg"
                    alt="Vineet Verma"
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                  */}
                </Box>
              </Box>

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <Box
                  key={i}
                  component={motion.div}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.3,
                  }}
                  sx={{
                    position: 'absolute',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: i % 2 === 0 ? '#00d4ff' : '#bb86fc',
                    boxShadow: `0 0 20px ${i % 2 === 0 ? '#00d4ff' : '#bb86fc'}`,
                    left: `${20 + i * 60}px`,
                    top: `${50 + (i % 3) * 100}px`,
                  }}
                />
              ))}
            </Box>
          </motion.div>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        component={motion.div}
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
        }}
        onClick={() => scrollToSection('about')}
      >
        <Box
          sx={{
            width: '30px',
            height: '50px',
            border: '2px solid rgba(0, 212, 255, 0.5)',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            padding: '8px',
          }}
        >
          <Box
            sx={{
              width: '6px',
              height: '10px',
              borderRadius: '3px',
              background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
              animation: 'scroll 2s ease-in-out infinite',
              '@keyframes scroll': {
                '0%': { transform: 'translateY(0)', opacity: 1 },
                '100%': { transform: 'translateY(20px)', opacity: 0 },
              },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
