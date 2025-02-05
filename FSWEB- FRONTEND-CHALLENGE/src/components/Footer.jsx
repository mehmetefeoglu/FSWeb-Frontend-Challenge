import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { DataContext } from '../context/DataContext';  

const Footer = () => {
  const { language, theme } = useContext(ThemeContext);  // Dil tercihi ve tema bilgisi
  const { data, loading, error } = useContext(DataContext);  // DataContext'ten veriyi alıyoruz

  // Eğer veri henüz yüklenmediyse, yükleme mesajı göster
  if (loading) {
    return <div>Loading...</div>;  // Yükleniyor mesajı
  }

  // Eğer veri yüklenirken hata alındıysa, hata mesajı göster
  if (error) {
    return <div>{error}</div>; // Hata mesajı
  }

  // Dil tercihine göre footer verisini alıyoruz
  const footer = data[language][0].footer;

  return (
    <footer className={`text-center  my-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <p>{footer.workTogether}</p>
      <a href={`mailto:${footer.email}`} className={`block ${theme === 'dark' ? 'text-blue-300' : 'text-blue-500'}`}>
        {footer.email}
      </a>
      <div className={`flex justify-center mt-4 space-x-4 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
        <a
          href={footer.links.blog}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${theme === 'dark' ? 'bg-blue-700 hover:bg-blue-800' : ''}`}>
            {footer.buttons.personalBlog}
          </button>
        </a>
        <a
          href={footer.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`bg-gray-500 text-white px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300 ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-700' : ''}`}>
            {footer.buttons.github}
          </button>
        </a>
        <a
          href={footer.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className={`bg-gray-500 text-white px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300 ${theme === 'dark' ? 'bg-gray-600 hover:bg-gray-700' : ''}`}>
            {footer.buttons.linkedin}
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
