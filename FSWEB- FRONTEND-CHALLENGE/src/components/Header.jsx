import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { DataContext } from '../context/DataContext';  // DataContext'ten veri alacağız

const Header = () => {
  const { theme, toggleTheme, language, toggleLanguage } = useContext(ThemeContext);
  const { data, loading, error } = useContext(DataContext);  // DataContext'ten veri alıyoruz

  // Eğer veri henüz yüklenmediyse, yükleme mesajı göster
  if (loading) {
    return <div>Loading...</div>; // Yükleniyor mesajı
  }

  // Eğer veri yüklenirken hata alındıysa, hata mesajı göster
  if (error) {
    return <div>{error}</div>; // Hata mesajı
  }

  // Dilin İngilizce veya Türkçe olduğuna göre header verilerini belirliyoruz
  const header = data[language][0].header;  // header objesini alıyoruz

  return (
    <header className={`flex flex-col p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`} style={{ minHeight: '25vh' }}>
      {/* 1. grup butonlar (Light Mode ve Dil Seçimi) - Sağ Tarafa Yaslanacak */}
      <div className="flex justify-end space-x-4 mb-4 sm:mb-0">
        {/* Tema değiştir butonu */}
        <button
          onClick={toggleTheme}
          className={`p-1 text-xs rounded ${theme === 'dark' ? 'bg-gray-700 text-black' : 'bg-gray-200 text-black'}`}
          style={{ width: '80px', height: '30px' }} // Butonun boyutunu ayarlıyoruz
        >
          {theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
        </button>

        {/* Slash işareti */}
        <span className="text-black text-lg">/</span>

        {/* Dil değiştir butonu */}
        <button
          onClick={toggleLanguage}
          className={`p-1 text-xs rounded ${theme === 'dark' ? 'bg-gray-700 text-black' : 'bg-gray-200 text-black'}`}
          style={{ width: '80px', height: '30px' }} // Butonun boyutunu ayarlıyoruz
        >
          {language === 'tr' ? 'SWITCH TO ENGLISH' : "TÜRKÇE'ye GEÇ"}
        </button>
      </div>

      {/* 2. grup butonlar (Skills, Projects, Hire Me) - Sağ tarafa yaslanacak */}
      <div className={`flex flex-row justify-end  space-x-4 mt-4 ${theme === 'dark' ? 'text-black' : ''}`}>
        {/* Skills butonu */}
        <button
          className={`p-2 text-sm rounded ${theme === 'dark' ? 'bg-gray-700 text-black' : 'bg-gray-200 text-black'}`}
          style={{ height: '40px', width: '120px' }} // Buton boyutunu ayarlıyoruz
        >
          {header.skills}  {/* İngilizce veya Türkçe metin gösterilecek */}
        </button>

        {/* Projects butonu */}
        <button
          className={`p-2 text-sm rounded ${theme === 'dark' ? 'bg-gray-700 text-black' : 'bg-gray-200 text-black'}`}
          style={{ height: '40px', width: '120px' }} // Buton boyutunu ayarlıyoruz
        >
          {header.projects}  {/* İngilizce veya Türkçe metin gösterilecek */}
        </button>

        {/* Hire me butonu */}
        <button
          className={`p-2 text-sm rounded ${theme === 'dark' ? 'bg-gray-700 text-black' : 'bg-gray-200 text-black'}`}
          style={{ height: '40px', width: '120px' }} // Buton boyutunu ayarlıyoruz
        >
          {header.hireMe}  {/* İngilizce veya Türkçe metin gösterilecek */}
        </button>
      </div>
    </header>
  );
};

export default Header;
