'use client';
import { createTheme, ThemeOptions } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d4ff',
      light: '#5dfdff',
      dark: '#00a3cc',
    },
    secondary: {
      main: '#bb86fc',
      light: '#e7b9ff',
      dark: '#9754d4',
    },
    background: {
      default: '#0a0e27',
      paper: 'rgba(26, 31, 58, 0.4)',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Inter", "Orbitron", "Roboto", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      letterSpacing: '-0.02em',
      textShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-0.01em',
      textShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
            transition: 'left 0.5s',
          },
          '&:hover::before': {
            left: '100%',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
          boxShadow: '0 8px 25px rgba(0, 212, 255, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #00f0ff 0%, #d4a5ff 100%)',
            boxShadow: '0 12px 35px rgba(0, 212, 255, 0.6)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          border: '2px solid rgba(0, 212, 255, 0.5)',
          background: 'rgba(0, 212, 255, 0.05)',
          '&:hover': {
            border: '2px solid rgba(0, 212, 255, 0.8)',
            background: 'rgba(0, 212, 255, 0.15)',
            transform: 'translateY(-2px)',
            boxShadow: '0 10px 30px rgba(0, 212, 255, 0.3)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.5)',
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            boxShadow: '0 8px 32px 0 rgba(0, 212, 255, 0.2)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 16,
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            boxShadow: '0 20px 40px rgba(0, 212, 255, 0.3)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            backdropFilter: 'blur(10px)',
            borderRadius: 12,
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 212, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00d4ff',
              boxShadow: '0 0 15px rgba(0, 212, 255, 0.3)',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(0, 212, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 212, 255, 0.3)',
          fontWeight: 500,
          transition: 'all 0.3s ease',
          '&:hover': {
            backgroundColor: 'rgba(0, 212, 255, 0.2)',
            transform: 'scale(1.05)',
            boxShadow: '0 5px 15px rgba(0, 212, 255, 0.3)',
          },
        },
      },
    },
  },
} as ThemeOptions);
