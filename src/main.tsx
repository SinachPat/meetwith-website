
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./app/App.tsx";
import FaqsPage from "./app/FaqsPage.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/faqs" element={<FaqsPage />} />
    </Routes>
  </BrowserRouter>,
);
  
