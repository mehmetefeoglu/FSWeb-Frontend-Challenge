import React, { createContext, useState, useEffect } from 'react';

// Varsayılan tema ve dil
const defaultTheme = localStorage.getItem('theme') || 'light';
const defaultLanguage = localStorage.getItem('language') || 'en';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme);
  const [language, setLanguage] = useState(defaultLanguage);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Tema tercihini kaydet
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'tr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage); // Dil tercihini kaydet
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, toggleLanguage }}>
      {children}
    </ThemeContext.Provider>
  );
};
