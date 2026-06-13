import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { inject } from '@vercel/analytics';
import App from './App.tsx';
import { LanguageProvider} from './LanguageContext.tsx';
import './index.css';

inject();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
