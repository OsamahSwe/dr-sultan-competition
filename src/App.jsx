import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./layout/Layout";
import Home from "./Home";
import ToolDetailPage from "./pages/ToolDetailPage";
import FrameworkPage from "./pages/FrameworkPage";
import PhaseDetailPage from "./pages/PhaseDetailPage";
import "./i18n/config";

function App() {
  const { i18n } = useTranslation();

  // Update HTML document language when language changes
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/tool/:toolId" element={<ToolDetailPage />} />
            <Route path="/framework" element={<FrameworkPage />} />
            <Route path="/phase/:phaseId" element={<PhaseDetailPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
