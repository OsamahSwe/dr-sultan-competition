import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import Home from "./Home";
import ToolDetailPage from "./pages/ToolDetailPage";

function App() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");

  // Update HTML document language when language changes (keep LTR direction)
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = "ltr"; // Always LTR, even for Arabic
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <Router>
      <Routes>
        <Route
          element={
            <Layout
              theme={theme}
              onToggleTheme={toggleTheme}
              language={language}
              onToggleLanguage={toggleLanguage}
            />
          }
        >
          <Route
            path="/"
            element={
              <Home
                theme={theme}
                onToggleTheme={toggleTheme}
                language={language}
                onToggleLanguage={toggleLanguage}
              />
            }
          />
          <Route
            path="/tool/:toolId"
            element={<ToolDetailPage theme={theme} onToggleTheme={toggleTheme} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
