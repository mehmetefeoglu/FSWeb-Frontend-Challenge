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
  const { data, loading } = useContext(DataContext);
  const { language } = useContext(ThemeContext);

  // Veriler yüklenene kadar loading göstergesi
  if (loading) {
    return <div>Loading...</div>;
  }

  // Eğer data veya data.profile undefined ise hata göstermek
  if (!data || !data.profile) {
    return <div>Error: Veriler yüklenemedi.</div>;
  }

  return (
    <div
      className={`min-h-screen ${
        language === 'en' ? 'bg-white' : 'bg-gray-100'
      }`}
    >
      <Header />
      <Introduction data={data.profile} />
      {data.profile.skills && <Skills skills={data.profile.skills} />}
      <Profile data={data.profile} />
      <Projects projects={data.projects} />
      <Footer />
    </div>
  );
}

export default App;
