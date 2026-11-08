import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, createTheme } from '@mantine/core';
import { Provider } from 'react-redux';

import '@mantine/core/styles.css';
import './index.scss';

import App from './App';
import { store } from './app/store';

const theme = createTheme({
  primaryColor: 'indigo',
  fontFamily: 'Arial, sans-serif',

  colors: {
    brand: [
      '#eef2ff',
      '#dbe4ff',
      '#bac8ff',
      '#91a7ff',
      '#748ffc',
      '#5c7cfa',
      '#4c6ef5',
      '#4263eb',
      '#3b5bdb',
      '#364fc7',
    ],
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
);