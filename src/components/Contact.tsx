'use client';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  IconButton,
  Stack,
  Alert,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const socialLinks = [
  { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/vineet-verma-b80359250/', color: '#0077B5' },
  { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/vineet-ver', color: '#333' },
  { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/yourprofile', color: '#1DA1F2' },
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/the_vineetthakur/', color: '#E4405F' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here (e.g., email service, API)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box id="contact" sx={{ py: 10, background: 'background.paper' }}>
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
            Get In Touch
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: '800px', mx: 'auto' }}
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </Typography>

          <Grid container spacing={6}>
  <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background: 'background.default',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Send Me a Message
                </Typography>

                {submitted && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you! Your message has been sent successfully.
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    sx={{ mb: 3 }}
                  />

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      endIcon={<SendIcon />}
                      sx={{
                        background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                        py: 1.5,
                      }}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Paper>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  background: 'background.default',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  height: '100%',
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Connect With Me
                </Typography>

                <Box sx={{ mb: 4 }}>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                    <EmailIcon sx={{ color: 'primary.main' }} />
                    <Typography variant="body1">vineetthakur323@gmail.com</Typography>
                  </Stack>
                </Box>

                <Typography variant="h6" sx={{ mb: 2 }}>
                  Social Media
                </Typography>

                <Stack direction="row" spacing={2}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <IconButton
                        href={social.url}
                        target="_blank"
                        sx={{
                          color: 'text.primary',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          '&:hover': {
                            color: social.color,
                            border: `1px solid ${social.color}`,
                            background: `${social.color}20`,
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Stack>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Available for freelance projects, collaborations, and full-time opportunities.
                    Let&apos;s build something amazing together!
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}
