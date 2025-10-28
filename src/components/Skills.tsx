'use client';
import {
  Box,
  Container,
  Typography,
  Paper,
  LinearProgress,
} from '@mui/material';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import skillsData from '@/data/skills.json';

const SkillGlobe = dynamic(() => import('./SkillGlobe'), { ssr: false });

interface Skill {
  name: string;
  level: number;
}

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 10, background: 'background.default', position: 'relative', overflow: 'hidden' }}>
      {/* Background effects */}
      <Box
        component={motion.div}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: 'linear',
        }}
        sx={{
          position: 'absolute',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 212, 255, 0.05)',
          top: '-400px',
          right: '-400px',
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
            SKILLS & EXPERTISE
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            Comprehensive expertise across multiple domains and cutting-edge technologies
          </Typography>

          {/* 3D Skill Globe */}
          <Box sx={{ mb: 6 }}>
            <SkillGlobe />
          </Box>

          <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' } }}>
            {Object.entries(skillsData.categories).map(([category, skills], catIndex) => (
              <Box key={category}>
                <motion.div
                  initial={{ opacity: 0, x: catIndex % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIndex * 0.2 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      background: 'background.paper',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      height: '100%',
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}
                    >
                      {category}
                    </Typography>
                    {skills.map((skill: Skill, index: number) => (
                      <Box key={index} sx={{ mb: 3 }}>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mb: 1,
                          }}
                        >
                          <Typography variant="body1">{skill.name}</Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {skill.level}%
                          </Typography>
                        </Box>
                        <LinearProgress
                          variant="determinate"
                          value={skill.level}
                          sx={{
                            height: 8,
                            borderRadius: 4,
                            background: 'rgba(255, 255, 255, 0.1)',
                            '& .MuiLinearProgress-bar': {
                              background: 'linear-gradient(90deg, #00d4ff 0%, #bb86fc 100%)',
                            },
                          }}
                        />
                      </Box>
                    ))}
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
