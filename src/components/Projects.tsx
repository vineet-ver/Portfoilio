'use client';
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import projectsData from '@/data/projects.json';

export default function Projects() {
  return (
    <Box id="projects" sx={{ py: 10, background: 'background.paper' }}>
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
            Projects
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            Showcasing innovative solutions across AI, web development, and data
            science domains.
          </Typography>

          <Box sx={{ display: 'grid', gap: 4, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' } }}>
            {projectsData.projects.map((project, index) => (
              <Box key={project.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'background.default',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        border: '1px solid rgba(0, 212, 255, 0.5)',
                        boxShadow: '0 8px 30px rgba(0, 212, 255, 0.2)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={project.image}
                      alt={project.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ mb: 2, color: 'text.secondary' }}
                      >
                        {project.description}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
                            label={tech}
                            size="small"
                            sx={{
                              background: 'rgba(0, 212, 255, 0.1)',
                              color: 'primary.main',
                              border: '1px solid rgba(0, 212, 255, 0.3)',
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                    <CardActions sx={{ p: 2, pt: 0 }}>
                      {project.liveLink && (
                        <Button
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.liveLink}
                          target="_blank"
                          sx={{ color: 'primary.main' }}
                        >
                          Live Demo
                        </Button>
                      )}
                      {project.githubLink && (
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.githubLink}
                          target="_blank"
                          sx={{ color: 'text.secondary' }}
                        >
                          GitHub
                        </Button>
                      )}
                    </CardActions>
                  </Card>
                </motion.div>
              </Box>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
