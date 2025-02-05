import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import { ThemeContext } from '../context/ThemeContext';

const Skills = () => {
  const { data, loading, error } = useContext(DataContext);  // DataContext'ten gelen veriler
  const { language } = useContext(ThemeContext);  // Dil bilgisi

  // Veriler yüklenene kadar bekleme
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Hata durumu
  }

  console.log("Data:", data);
  console.log("Language:", language);
  const skills = data && data[language]?.[0]?.profile?.skills;

  // Eğer skills verisi yoksa, hata göster
  if (!skills || skills.length === 0) {
    console.log("Skills data is not available.");
    return <div>{language === 'en' ? "Skills data could not be loaded." : "Yetenekler verisi yüklenemedi."}</div>;
  }

  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-center">
        {language === 'en' ? 'Skills' : 'Yetenekler'}
      </h2>
      <ul className="mt-4 space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="border-b py-2 text-lg">
            <div className="font-semibold">
              {skill.name}
            </div>
            <p className="mt-2 text-gray-600">
              {skill.description[language] || "Description not available"}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
