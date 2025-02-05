import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext'; // Veri bağlamını içeri aktarıyoruz
import { ThemeContext } from '../context/ThemeContext';

const Introduction = () => {
  const { language } = useContext(ThemeContext); // Dil bilgisini alıyoruz
  const { data } = useContext(DataContext); // Context'ten verileri alıyoruz

  const introduction = data ? data[language][0].introduction : {}; // `introduction` bölümünden veriyi alıyoruz
  const links = introduction.links || {}; // Links verisini alıyoruz

  return (
    <section className="text-left my-8 px-4 md:px-0 mx-24"> {/* Sola yaslamak için text-left kullanıyoruz */}
      {/* Introduction Name with a horizontal line on the left */}
      <div className="flex items-center justify-start space-x-2 mb-4"> {/* Name için alt boşluk ekledik */}
        {/* Blue horizontal line with 1/12 width */}
        <div className="w-1/12 h-px bg-blue-500"></div>
        {/* Name */}
        <p className="text-xs font-bold text-blue-500">{introduction.name}</p>
      </div>

      {/* Bio */}
      <p className="text-4xl font-bold mb-4">{introduction.bio}</p> {/* Bio kısmı için alt boşluk ekledik */}

      {/* About */}
      <p className="mt-4 text-lg leading-relaxed max-w-3xl">{introduction.about}</p> {/* About kısmı için margin-top ekledik */}

      {/* Buttons */}
      <div className="mt-4 flex space-x-2"> {/* Butonları yan yana dizmek için flex ve space-x-2 kullandık */}
        <button className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          {introduction.hireMeButton}
        </button>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-600 transition duration-300">
            {introduction.githubButton}
          </button>
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-black px-4 py-2 rounded hover:bg-gray-600 transition duration-300">
            {introduction.linkedinButton}
          </button>
        </a>
      </div>
    </section>
  );
};

export default Introduction;
