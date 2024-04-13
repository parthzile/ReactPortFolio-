import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import PagenotfoundPage from "./pages/404page/404page.jsx";
import { AboutMePage } from "./pages/AboutMe/AboutMePage.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="*" element={<PagenotfoundPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
