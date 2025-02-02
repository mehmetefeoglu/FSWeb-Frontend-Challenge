import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Profile = () => {
  const { language } = useContext(ThemeContext);

  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold">
        {language === 'tr' ? 'Profil' : 'Profile'}
      </h2>
      <ul className="mt-4">
        <li>
          {language === 'tr'
            ? 'Doğum Tarihi: 01.01.1990'
            : 'Date of Birth: 01.01.1990'}
        </li>
        <li>
          {language === 'tr' ? 'İkamet Yeri: İstanbul' : 'Location: Istanbul'}
        </li>
        <li>
          {language === 'tr'
            ? 'Eğitim: Bilgisayar Mühendisliği'
            : 'Education: Computer Engineering'}
        </li>
        <li>
          {language === 'tr'
            ? 'Teknik Beceriler: Yazılım geliştirme'
            : 'Technical Skills: Software Development'}
        </li>
      </ul>
      <p className="mt-4">
        {language === 'tr'
          ? 'Hakkımda: Kendim hakkında bilgi veriyorum.'
          : 'About Me: I am providing some info about myself.'}
      </p>
    </section>
  );
};

export default Profile;
