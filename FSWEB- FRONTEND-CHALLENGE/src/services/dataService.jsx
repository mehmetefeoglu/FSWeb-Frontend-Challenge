import axios from 'axios';

// Verileri JSON dosyasından çekme
export const fetchData = async () => {
  try {
    const response = await axios.get('data/data.json'); // JSON dosyasını public içinde bulunduruyoruz
    // JSON dosyasını public içinde bulunduruyoruz
    console.log('Veri başarıyla alındı:', response.data); // Başarı durumunu logluyoruz
    return response.data;
  } catch (error) {
    console.error('Veri alma hatası: ', error);
    throw error; // Hatayı tekrar fırlatıyoruz
  }
};
