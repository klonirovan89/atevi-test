import React from 'react'
import { createRoot } from 'react-dom/client'
import App from "./App.tsx";

import './styles/global.module.scss'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
