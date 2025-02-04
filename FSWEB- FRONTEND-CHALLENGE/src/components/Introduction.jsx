import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext'; // Veri bağlamını içeri aktarıyoruz
import { ThemeContext } from '../context/ThemeContext';

const Introduction = () => {
  const { language } = useContext(ThemeContext); // Dil bilgisini alıyoruz
  const { data } = useContext(DataContext); // Context'ten verileri alıyoruz

  const introduction = data ? data[language][0].introduction : {}; // `introduction` bölümünden veriyi alıyoruz
  const links = introduction.links || {}; // Links verisini alıyoruz

  return (
    <section className="text-center my-8 px-4 md:px-0">
      <h1 className="text-4xl font-bold">{introduction.name}</h1>
      <p className="mt-4 text-lg leading-relaxed max-w-3xl mx-auto">
        {introduction.about}
      </p>
      <div className="mt-4">
        <button className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
          {introduction.hireMeButton}
        </button>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-black px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300">
            {introduction.githubButton}
          </button>
        </a>
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gray-500 text-black px-4 py-2 ml-2 rounded hover:bg-gray-600 transition duration-300">
            {introduction.linkedinButton}
          </button>
        </a>
      </div>
    </section>
  );
};

export default Introduction;
