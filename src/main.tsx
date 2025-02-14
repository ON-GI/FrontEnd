import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import Router from './routes/index.tsx';
import Provider from './provider/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <Router />
    </Provider>
  </StrictMode>,
);
