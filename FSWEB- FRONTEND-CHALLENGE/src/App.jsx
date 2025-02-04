import React, { useContext } from 'react';
import { DataContext } from './context/DataContext';
import { ThemeContext } from './context/ThemeContext';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const { data, loading, error } = useContext(DataContext);
  const { language } = useContext(ThemeContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!data || !data[language] || !data[language][0]) {
    return <div>Error: Veriler yüklenemedi.</div>;
  }

  const profileData = data[language][0].profile;
  const skillsData = data[language][0].skills;  // Burada skills verisini alıyoruz.

  return (
    <div className={`w-full h-full flex flex-col ${language === 'en' ? 'bg-white' : 'bg-gray-100'}`}>
      <Header />
      <Introduction data={profileData} />
      {skillsData && <Skills skills={skillsData} />} {/* skills verisini buradan alıyoruz */}
      <Profile data={profileData} />
      <Projects projects={data[language][0].projects} />
      <Footer />
    </div>
  );
}

export default App;
