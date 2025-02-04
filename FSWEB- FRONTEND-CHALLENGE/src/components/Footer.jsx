import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { DataContext } from '../context/DataContext';  // DataContext'ten veri alıyoruz

const Footer = () => {
  const { language } = useContext(ThemeContext);  // Dil tercihi
  const { data } = useContext(DataContext);  // DataContext'ten veriyi alıyoruz

  // Eğer veri henüz yüklenmediyse, yükleme mesajı göster
  if (!data) {
    return <div>Loading...</div>;  // Yükleniyor mesajı
  }

  // Dil tercihine göre footer verisini alıyoruz
  const footer = data[language][0].footer;

  return (
    <footer className="text-center my-8">
      <p>{footer.workTogether}</p>
      <a href={`mailto:${footer.email}`} className="block text-blue-500">
        {footer.email}
      </a>
      <div className="flex justify-center mt-4 space-x-4">
        <a
          href={footer.links.blog}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            {footer.buttons.personalBlog}
          </button>
        </a>
        <a
          href={footer.links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-white px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300">
            {footer.buttons.github}
          </button>
        </a>
        <a
          href={footer.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-white px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300">
            {footer.buttons.linkedin}
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
