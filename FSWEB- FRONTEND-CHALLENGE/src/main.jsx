import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client'; 
import App from './App';
import DataProvider from './context/DataContext'; 
import { ThemeProvider } from './context/ThemeContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ThemeProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </ThemeProvider>
);
