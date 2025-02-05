import axios from 'axios';
import { toast } from 'react-toastify';

// Verileri JSON dosyasından çekme
export const fetchData = async () => {
  try {
    const response = await axios.get('/data/data.json'); 
    console.log('Veri başarıyla alındı:', response.data); 
    toast.success("Veriler başarıyla yüklendi!"); // Toast ile başarı mesajı
    return response.data;
  } catch (error) {
    console.error('Veri alma hatası: ', error);
    toast.error("Veriler yüklenirken hata oluştu!"); // Toast ile hata mesajı
    throw error; 
  }
};
