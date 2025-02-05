import React, { useContext } from 'react';
import { DataContext } from './context/DataContext';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { data, loading, error } = useContext(DataContext); // DataContext'ten veri alıyoruz
  const { language } = useContext(ThemeContext); // Tema için dil bilgisi

  if (loading) {
    return <div>Loading...</div>; // Yükleniyor durumu
  }

  if (error) {
    return <div>{error}</div>; // Hata mesajı
  }

  if (!data || !data[language] || !data[language][0]) {
    return <div>Error: Veriler yüklenemedi.</div>; // Veriler gelmezse hata mesajı
  }

  const profileData = data[language][0].profile;

  return (
    <div className={`w-full h-full flex flex-col ${language === 'en' ? 'bg-white' : 'bg-gray-100'}`}>
      <Header />
      <Introduction data={profileData} />
      {profileData.skills && <Skills skills={profileData.skills} />}
      <Profile data={profileData} />
      <Projects projects={data[language][0].projects} />
      <Footer />
      <ToastContainer /> 
    </div>
  );
}

export default App;
