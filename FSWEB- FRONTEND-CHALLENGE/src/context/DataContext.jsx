import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../services/dataService';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Hata durumu ekledik

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonData = await fetchData(); // JSON verilerini çekiyoruz
        console.log('Veri başarıyla alındı:', jsonData); // Konsola veriyi yazdırarak kontrol edebiliriz
        setData(jsonData);
      } catch (error) {
        console.error('Veri yükleme hatası:', error);
        setError('Veriler yüklenemedi.'); // Hata mesajı set ediyoruz
      } finally {
        setLoading(false); // Yükleme bitiyor
      }
    };

    loadData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
