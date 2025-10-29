import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from '@/theme/theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vineet | Data Scientist & Full Stack AI Engineer',
  description: 'Portfolio of Vineet Sharma - Data Scientist, Web Developer, Software Developer, and Full Stack AI Engineer specializing in AI/ML, web development, and innovative solutions.',
  keywords: ['Data Scientist', 'AI Engineer', 'Web Developer', 'Full Stack', 'Machine Learning', 'Vineet Sharma'],
  authors: [{ name: 'Vineet ' }],
  openGraph: {
    title: 'Vineet | Portfolio',
    description: 'Data Scientist, Web Developer & Full Stack AI Engineer',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
