'use client';
import { Box, Container, Typography, Paper, Tooltip } from '@mui/material';
import { motion } from 'framer-motion';
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiFlask,
} from 'react-icons/si';

const techStack = [
  { name: 'Python', icon: <SiPython size={50} />, color: '#3776AB' },
  { name: 'React', icon: <SiReact size={50} />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs size={50} />, color: '#000000' },
  { name: 'Node.js', icon: <SiNodedotjs size={50} />, color: '#339933' },
  { name: 'TensorFlow', icon: <SiTensorflow size={50} />, color: '#FF6F00' },
  { name: 'PyTorch', icon: <SiPytorch size={50} />, color: '#EE4C2C' },
  { name: 'Scikit-learn', icon: <SiScikitlearn size={50} />, color: '#F7931E' },
  { name: 'Pandas', icon: <SiPandas size={50} />, color: '#150458' },
  { name: 'NumPy', icon: <SiNumpy size={50} />, color: '#013243' },
  { name: 'JavaScript', icon: <SiJavascript size={50} />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript size={50} />, color: '#3178C6' },
  { name: 'MongoDB', icon: <SiMongodb size={50} />, color: '#47A248' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={50} />, color: '#4169E1' },
  { name: 'Docker', icon: <SiDocker size={50} />, color: '#2496ED' },
  { name: 'Git', icon: <SiGit size={50} />, color: '#F05032' },
  { name: 'Flask', icon: <SiFlask size={50} />, color: '#000000' },
];

export default function TechStack() {
  return (
    <Box id="tech-stack" sx={{ py: 10, background: 'background.paper' }}>
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
            Tech Stack
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            Technologies and tools I use to bring ideas to life.
          </Typography>

          <Box sx={{ display: 'grid', gap: 3, gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)', lg: 'repeat(6, 1fr)' } }}>
            {techStack.map((tech, index) => (
              <Box key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Tooltip title={tech.name} arrow>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'background.default',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        '&:hover': {
                          border: '1px solid rgba(0, 212, 255, 0.5)',
                          boxShadow: '0 8px 30px rgba(0, 212, 255, 0.2)',
                          background: 'rgba(0, 212, 255, 0.05)',
                        },
                      }}
                    >
                      <Box sx={{ color: tech.color }}>{tech.icon}</Box>
                    </Paper>
                  </Tooltip>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
