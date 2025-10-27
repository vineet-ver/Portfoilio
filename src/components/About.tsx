'use client';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import DataObjectIcon from '@mui/icons-material/DataObject';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WebIcon from '@mui/icons-material/Web';

const experiences = [
  {
    icon: <DataObjectIcon sx={{ fontSize: 40 }} />,
    title: 'Data Scientist',
    description: 'Expert in machine learning, data analysis, and predictive modeling with Python and advanced statistical techniques.',
  },
  {
    icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
    title: 'AI Engineer',
    description: 'Building intelligent systems using deep learning, NLP, computer vision, and cutting-edge AI frameworks.',
  },
  {
    icon: <WebIcon sx={{ fontSize: 40 }} />,
    title: 'Web Developer',
    description: 'Creating responsive, modern web applications using React, Next.js, and full-stack technologies.',
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Software Developer',
    description: 'Developing scalable software solutions with clean code, best practices, and modern development workflows.',
  },
];

export default function About() {
  return (
    <Box id="about" sx={{ py: 10, background: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            Passionate about leveraging technology to solve complex problems and
            create innovative solutions that make a real-world impact.
          </Typography>

          <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' } }}>
            {experiences.map((experience, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      background: 'background.paper',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        border: '1px solid rgba(0, 212, 255, 0.5)',
                        boxShadow: '0 8px 30px rgba(0, 212, 255, 0.2)',
                      },
                    }}
                  >
                    <Box sx={{ color: 'primary.main', mb: 2 }}>{experience.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {experience.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {experience.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
