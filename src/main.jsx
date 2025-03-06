import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // Assuming App.js or App.jsx
import './index.css';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
