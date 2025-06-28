'use client';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const buttonStyle = {
    position: 'fixed',
    top: '2.5rem',
    right: '2.5rem',
    zIndex: 1000,
    width: '4.2rem',
    height: '4.2rem',
    borderRadius: '50%',
    border: `2.5px solid ${theme === 'dark' ? '#d4af37' : '#2563eb'}`,
    background: 'var(--bg-secondary)',
    boxShadow: theme === 'dark' 
      ? '0 4px 24px 0 rgba(212,175,55,0.18)' 
      : '0 4px 24px 0 rgba(37,99,235,0.18)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '2rem',
    cursor: 'pointer',
    transition: 'all 0.3s',
    margin: 0,
    padding: 0
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
      style={buttonStyle}
    >
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
} 