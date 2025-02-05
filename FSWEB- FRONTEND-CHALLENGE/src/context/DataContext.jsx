import React, { createContext, useState, useEffect } from 'react';
import { fetchData } from '../services/dataService';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const jsonData = await fetchData(); // API'den veri çekme
        setData(jsonData); // Veriyi set ediyoruz
      } catch (error) {
        setError('Veriler yüklenemedi.'); // Hata mesajı
      } finally {
        setLoading(false); // Yükleme tamamlandı
      }
    };

    loadData(); // Veri yükleme fonksiyonu
  }, []); // Burada boş array var, bu da sayfa her yüklendiğinde veri yüklenmesini sağlar

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
