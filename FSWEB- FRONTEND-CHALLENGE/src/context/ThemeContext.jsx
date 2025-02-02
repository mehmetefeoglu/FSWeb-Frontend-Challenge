import React, { createContext, useState } from 'react';

// ThemeContext oluşturuluyor
export const ThemeContext = createContext();

// ThemeProvider bileşeni
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Varsayılan tema 'light'
  const [language, setLanguage] = useState('tr'); // Varsayılan dil 'tr'

  // Tema değiştirme fonksiyonu
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark'); // Tema 'dark' ise 'light' yap, değilse 'dark' yap
  };

  // Dil değiştirme fonksiyonu
  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr'); // Dil 'tr' ise 'en', değilse 'tr' yap
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, language, toggleLanguage }}
    >
      <div className={theme === 'dark' ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};
