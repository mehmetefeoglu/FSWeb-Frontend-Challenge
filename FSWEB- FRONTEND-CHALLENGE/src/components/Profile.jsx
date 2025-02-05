import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { DataContext } from '../context/DataContext';  

const Profile = () => {
  const { language } = useContext(ThemeContext);  // Dil tercihi
  const { data } = useContext(DataContext);  // DataContext'ten veriyi alıyoruz

  // Eğer veri henüz yüklenmediyse, yükleme mesajı göster
  if (!data) {
    return <div>Loading...</div>;  // Yükleniyor mesajı
  }

  // Dil tercihine göre profil verisini alıyoruz
  const profile = data[language] && data[language][0] && data[language][0].profile;

  // Eğer profile veya skills verisi yoksa, boş bir dizi ile fallback yapıyoruz
  const skills = profile?.skills || [];

  return (
    <section className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white mx-24">
      <h2 className="text-2xl font-bold">{language === 'tr' ? 'Profil' : 'Profile'}</h2>
  
      <div className="flex justify-between mt-4">
     
        <ul className="w-1/2">
          <li>{language === 'tr' ? `Doğum Tarihi: ${profile?.birthDate}` : `Date of Birth: ${profile?.birthDate}`}</li>
          <li>{language === 'tr' ? `İkamet Yeri: ${profile?.city}` : `Location: ${profile?.city}`}</li>
          <li>{language === 'tr' ? `Eğitim: ${profile?.education}` : `Education: ${profile?.education}`}</li>
          <li>
            {language === 'tr'
              ? `Teknik Beceriler: ${skills.join(', ')}`
              : `Technical Skills: ${skills.join(', ')}`}
          </li>
        </ul>
  
       
        <div className="w-1/2 ml-8">
          <h2 className="text-xl font-semibold mb-2">
            {language === 'tr' ? 'Hakkımda' : 'About Me'}
          </h2>
          <p>
            {language === 'tr' ? `${profile?.about}` : `${profile?.about}`}
          </p>
        </div>
      </div>
    </section>
  );
  
  
};

export default Profile;
