import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { DataContext } from '../context/DataContext';  

const Header = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useContext(ThemeContext);
  const { data, loading, error } = useContext(DataContext);  // DataContext'ten veri alıyoruz

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const header = data[language][0].header;

  return (
    <header className={`flex flex-col p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} style={{ minHeight: '25vh' }}>
      <div className="flex justify-end space-x-4 mb-4 sm:mb-0">
        <button
          onClick={toggleTheme}
          className={`p-1 text-xs rounded ${theme === 'dark' ? ' text-black' : 'text-black'}`}
          style={{ width: '80px', height: '30px' }}
        >
          {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </button>
        <span className="text-black text-lg">/</span>
        <button
          onClick={toggleLanguage}
          className={`p-1 text-xs rounded ${theme === 'dark' ? 'text-black' : 'text-black'}`}
          style={{ width: '120px', height: '30px' }}
        >
          {language === 'tr' ? 'SWITCH TO ENGLISH' : "TÜRKÇE'ye GEÇ"}
        </button>
      </div>

      <div className={`flex flex-row justify-end  space-x-4 mt-4 ${theme === 'dark' ? 'text-black' : ''}`}>
        <button className={`p-2 text-sm rounded ${theme === 'dark' ? 'text-black' : 'text-black'}`} style={{ height: '40px', width: '120px' }}>
          {header.skills}
        </button>
        <button className={`p-2 text-sm rounded ${theme === 'dark' ? ' text-black' : ' text-black'}`} style={{ height: '40px', width: '120px' }}>
          {header.projects}
        </button>
        <button className={`p-2 text-sm rounded ${theme === 'dark' ? ' text-black' : ' text-black'}`} style={{ height: '40px', width: '120px' }}>
          {header.hireMe}
        </button>
      </div>
    </header>
  );
};

export default Header;
