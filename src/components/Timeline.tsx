'use client';
import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

interface TimelineItem {
  id: number;
  type: 'work' | 'education' | 'achievement';
  title: string;
  organization: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'BCA in Computer Science',
    organization: 'Your University Name',
    period: '2022 - 2025',
    description: 'Specializing in AI/ML and Cybersecurity. Focus on advanced algorithms, deep learning, and secure systems.',
    icon: <SchoolIcon />,
    color: '#bb86fc',
  },
  {
    id: 2,
    type: 'work',
    title: 'Data analyst Intern',
    organization: 'Tech Company',
    period: '2025 - 2025',
    description: 'Developed ML models for predictive analytics and automated data processing pipelines.',
    icon: <WorkIcon />,
    color: '#00d4ff',
  },
  {
    id: 3,
    type: 'achievement',
    title: 'AI Hackathon Winner',
    organization: 'National Level Competition',
    period: '2024',
    description: 'Built an AI-powered solution for healthcare diagnostics, winning first place among 500+ teams.',
    icon: <EmojiEventsIcon />,
    color: '#FFD700',
  },
  {
    id: 4,
    type: 'work',
    title: 'Full Stack Developer',
    organization: 'Freelance Projects',
    period: '2023 - 2025',
    description: 'Developed multiple web applications using Next.js, React, and Node.js for various clients.',
    icon: <WorkIcon />,
    color: '#00d4ff',
  },
];

export default function Timeline() {
  return (
    <Box
      id="experience"
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
              fontFamily: 'Orbitron',
            }}
          >
            EXPERIENCE & EDUCATION
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 8, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            My professional journey through the world of technology and innovation
          </Typography>

          {/* Timeline */}
          <Box sx={{ position: 'relative' }}>
            {/* Vertical Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '20px', md: '50%' },
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, #00d4ff 0%, #bb86fc 100%)',
                transform: { xs: 'none', md: 'translateX(-50%)' },
              }}
            />

            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                    mb: 6,
                    pl: { xs: 7, md: 0 },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      position: 'relative',
                    }}
                  >
                    <Paper
                      elevation={0}
                      component={motion.div}
                      whileHover={{ scale: 1.03, y: -5 }}
                      sx={{
                        p: 3,
                        background: 'rgba(255, 255, 255, 0.03)',
                        backdropFilter: 'blur(15px)',
                        border: `1px solid ${item.color}40`,
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          border: `1px solid ${item.color}`,
                          boxShadow: `0 10px 40px ${item.color}40`,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box
                          sx={{
                            width: 50,
                            height: 50,
                            borderRadius: '12px',
                            background: `linear-gradient(135deg, ${item.color}20 0%, ${item.color}40 100%)`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            mr: 2,
                            color: item.color,
                          }}
                        >
                          {item.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="caption"
                            sx={{
                              color: item.color,
                              fontWeight: 600,
                              fontFamily: 'Orbitron',
                            }}
                          >
                            {item.period}
                          </Typography>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {item.title}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'primary.main',
                          mb: 1,
                          fontWeight: 500,
                        }}
                      >
                        {item.organization}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.description}
                      </Typography>
                    </Paper>

                    {/* Timeline Dot */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: { xs: '-51px', md: index % 2 === 0 ? 'calc(100% + 19px)' : '-31px' },
                        top: 20,
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: item.color,
                        border: '4px solid #0a0e27',
                        boxShadow: `0 0 20px ${item.color}`,
                        zIndex: 2,
                      }}
                    />
                  </Box>
                </Box>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
