import axios from 'axios';

// Verileri JSON dosyasından çekme
export const fetchData = async () => {
  try {
    // Burada JSON dosyasını ya da API'yi çekebilirsiniz.
    const response = await axios.get('/data/data.json'); // JSON dosyasını buraya ekleyin
    return response.data;
  } catch (error) {
    console.error('Veri alma hatası: ', error);
    throw error;
  }
};
