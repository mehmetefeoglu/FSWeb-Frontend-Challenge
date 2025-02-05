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
  const skills = data[language]?.[0].skills;

  // Eğer skills verisi yoksa, hata göster
  if (!skills || skills.length === 0) {
    console.log("Skills data is not available.");
    return <div>{language === 'en' ? "Skills data could not be loaded." : "Yetenekler verisi yüklenemedi."}</div>;
  }

  return (
    <section className="my-8 px-4 mx-24">
      <h2 className="text-3xl font-semibold text-center mb-6">
        {language === 'en' ? 'Skills' : 'Yetenekler'}
      </h2>
      <div className="flex flex-wrap justify-start gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-start w-[200px]">
            <div className="font-semibold text-xl mb-2">
              {skill.name}
            </div>
            <p className="text-gray-600 text-sm text-center">
              {skill.description[language] || "Description not available"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
