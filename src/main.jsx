import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Page from './pages/404page/404page.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="404" element={<Page />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
