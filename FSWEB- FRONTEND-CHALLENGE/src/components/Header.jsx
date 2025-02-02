import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme, language, toggleLanguage } =
    useContext(ThemeContext);

  return (
    <header className="flex justify-between p-4 bg-gray-800 text-black">
      <div className="text-xl text-white">Mehmet Efeoğlu</div>
      <div className="flex space-x-4">
        <button onClick={toggleTheme} className="p-2 bg-gray-700 rounded">
          {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
        <button onClick={toggleLanguage} className="p-2 bg-gray-700 rounded">
          {language === 'tr' ? 'SWITCH TO ENGLISH' : "TÜRKÇE'ye GEÇ"}
        </button>
      </div>
    </header>
  );
};

export default Header;
