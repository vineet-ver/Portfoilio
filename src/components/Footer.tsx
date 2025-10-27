'use client';
import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'LinkedIn', icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/vineet-verma-b80359250/' },
  { name: 'GitHub', icon: <GitHubIcon />, url: 'https://github.com/vineet-ver' },
  { name: 'Twitter', icon: <TwitterIcon />, url: 'https://twitter.com/yourprofile' },
  { name: 'Instagram', icon: <InstagramIcon />, url: 'https://www.instagram.com/the_vineetthakur/' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        background: 'background.default',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © 2025 Vineet Verma. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={1}>
            {socialLinks.map((social, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  href={social.url}
                  target="_blank"
                  size="small"
                  sx={{
                    color: 'text.secondary',
                    '&:hover': {
                      color: 'primary.main',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
