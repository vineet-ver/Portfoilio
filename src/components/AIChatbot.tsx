'use client';
import { useState } from 'react';
import { Box, Paper, TextField, IconButton, Typography, Fab, Collapse } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import SmartToyIcon from '@mui/icons-material/SmartToy';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function AIChatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "👋 Hi! I'm Vineet's AI Assistant. Ask me anything about his skills, projects, or experience!",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const quickResponses: Record<string, string> = {
    skills: "Vineet is skilled in:\n🤖 Machine Learning & AI\n💻 Full Stack Development (React, Next.js, Node.js)\n🐍 Python (TensorFlow, PyTorch, Scikit-learn)\n🔒 Cybersecurity\n📊 Data Science & Analytics\n☁️ Cloud Computing (AWS, Azure)",
    projects: "Some of Vineet's notable projects include:\n1. AI-Powered Calorie Calculator with ML models\n2. Data Preprocessing Web App with automated ML training\n3. MBA Chatbot AI with NLP capabilities\n\nCheck out the Projects section for more details!",
    experience: "Vineet has experience in:\n• Data Science & Machine Learning\n• Full Stack Web Development\n• AI/ML Engineering\n• Cybersecurity\n• Building scalable systems\n\nHe's passionate about creating innovative solutions!",
    education: "Vineet is currently pursuing his education in Computer Science with specialization in AI/ML and Cybersecurity.",
    contact: "You can reach Vineet at:\n📧 vineetthakur323@gmail.com\n💼 LinkedIn: linkedin.com/in/vineet-verma-b80359250\n🐙 GitHub: github.com/vineet-ver",
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology')) {
      return quickResponses.skills;
    } else if (lowerMessage.includes('project')) {
      return quickResponses.projects;
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('work')) {
      return quickResponses.experience;
    } else if (lowerMessage.includes('education') || lowerMessage.includes('study')) {
      return quickResponses.education;
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
      return quickResponses.contact;
    } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! 👋 I'm here to help you learn about Vineet. What would you like to know?";
    } else {
      return "I can help you with information about Vineet's skills, projects, experience, education, or contact details. What would you like to know?";
    }
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        style={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 1000,
        }}
      >
        <Fab
          color="primary"
          onClick={() => setOpen(!open)}
          sx={{
            width: 70,
            height: 70,
            background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
            '&:hover': {
              boxShadow: '0 0 50px rgba(0, 212, 255, 0.8)',
            },
          }}
        >
          {open ? <CloseIcon sx={{ fontSize: 32 }} /> : <ChatIcon sx={{ fontSize: 32 }} />}
        </Fab>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200 }}
            style={{
              position: 'fixed',
              bottom: 120,
              right: 30,
              zIndex: 999,
            }}
          >
            <Paper
              elevation={10}
              sx={{
                width: 380,
                height: 550,
                background: 'rgba(10, 14, 39, 0.95)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 212, 255, 0.3)',
                borderRadius: 4,
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                boxShadow: '0 0 50px rgba(0, 212, 255, 0.3)',
              }}
            >
              {/* Chat Header */}
              <Box
                sx={{
                  p: 2,
                  background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2) 0%, rgba(187, 134, 252, 0.2) 100%)',
                  borderBottom: '1px solid rgba(0, 212, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <SmartToyIcon sx={{ color: '#00d4ff', fontSize: 32 }} />
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Ask Vineet AI
                  </Typography>
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    Powered by AI • Online
                  </Typography>
                </Box>
              </Box>

              {/* Messages Area */}
              <Box
                sx={{
                  flex: 1,
                  overflowY: 'auto',
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  '&::-webkit-scrollbar': {
                    width: '8px',
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                    borderRadius: '4px',
                  },
                }}
              >
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                      }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 1.5,
                          maxWidth: '75%',
                          background:
                            msg.sender === 'user'
                              ? 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)'
                              : 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border:
                            msg.sender === 'bot'
                              ? '1px solid rgba(0, 212, 255, 0.3)'
                              : 'none',
                          borderRadius: 2,
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            whiteSpace: 'pre-line',
                            color: msg.sender === 'user' ? '#fff' : 'text.primary',
                          }}
                        >
                          {msg.text}
                        </Typography>
                      </Paper>
                    </Box>
                  </motion.div>
                ))}
              </Box>

              {/* Input Area */}
              <Box
                sx={{
                  p: 2,
                  borderTop: '1px solid rgba(0, 212, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.03)',
                  display: 'flex',
                  gap: 1,
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Ask me anything..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') handleSend();
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'text.primary',
                    },
                  }}
                />
                <IconButton
                  onClick={handleSend}
                  sx={{
                    background: 'linear-gradient(135deg, #00d4ff 0%, #bb86fc 100%)',
                    '&:hover': {
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.5)',
                    },
                  }}
                >
                  <SendIcon />
                </IconButton>
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
