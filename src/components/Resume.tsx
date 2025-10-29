'use client';
import { Box, Container, Typography, Button, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Resume() {
  return (
    <Box id="resume" sx={{ py: 10, background: 'background.default' }}>
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
            Resume
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 4, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            Download or view my detailed resume to learn more about my experience and qualifications.
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              background: 'background.paper',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              maxWidth: '900px',
              mx: 'auto',
            }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<DownloadIcon />}
                  href="/projects/resume-2025-vineet-best.pdf"
                  download
                  sx={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<VisibilityIcon />}
                  href="/projects/resume-2025-vineet-best.pdf"
                  target="_blank"
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    px: 4,
                    py: 1.5,
                    '&:hover': {
                      borderColor: 'primary.light',
                      background: 'rgba(0, 212, 255, 0.1)',
                    },
                  }}
                >
                  View Resume
                </Button>
              </motion.div>
            </Stack>

            {/* Embedded PDF Viewer */}
            <Box sx={{ mt: 4, height: '600px', width: '100%' }}>
              <iframe
                src="/projects/resume-2025-vineet-best.pdf"
                width="100%"
                height="100%"
                style={{ border: 'none', borderRadius: '8px' }}
                title="Resume PDF"
              />
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}
