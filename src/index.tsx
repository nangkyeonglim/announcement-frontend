import React from 'react';
import ReactDOM from 'react-dom/client';
import { worker } from './mocks/browser';
import { Router } from './routes/Router';

worker.start();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
