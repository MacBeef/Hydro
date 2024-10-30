import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import i18n from './i18n'


/* HVAD ER MAIN.JSX
-------------------------------------------------------------------------------------------
Main.jsx er hvad der bliver kaldt i vores index.html
Det er her vi kan kombinere forskellige sider hvis nødvendigt
Vi kan fx lave en verifikations side for siden, før man kan komme til App.jsx
-------------------------------------------------------------------------------------------*/
const root = createRoot(document.getElementById('root'));

  root.render(
    <StrictMode>
        <App />
    </StrictMode>,
  );