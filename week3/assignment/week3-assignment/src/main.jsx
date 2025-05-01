import { ThemeProvider } from '@emotion/react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalStyle from './styles/globalStyle.jsx';
import { theme } from './styles/index.js';

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>
);
