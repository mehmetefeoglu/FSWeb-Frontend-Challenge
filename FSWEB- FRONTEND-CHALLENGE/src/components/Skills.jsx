import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';  // ThemeContext'i import ediyoruz

const Skills = ({ skills }) => {
  const { language } = useContext(ThemeContext);  // Dil bilgisini alıyoruz.

  if (!skills || skills.length === 0) {
    return <div>No skills available.</div>;  // Eğer skills verisi yoksa, bir uyarı gösteririz
  }

  return (
    <section className="my-8">
      <h2 className="text-3xl font-semibold text-center">
        {language === 'en' ? 'Skills' : 'Yetenekler'}
      </h2>
      <ul className="mt-4 space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="border-b py-2 text-lg">
            <div className="font-semibold">{skill.name}</div>
            <p className="mt-2 text-gray-600">
              {skill.description[language]} {/* Burada dil seçimine göre açıklamayı alıyoruz */}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
