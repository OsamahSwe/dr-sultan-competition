import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useTheme } from "../context/ThemeContext";
import MobileHeader from "../components/MobileHeader";

function Layout() {
  const { theme, toggleTheme } = useTheme();
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <>
      <MobileHeader
        theme={theme}
        language={i18n.language}
        onToggleLanguage={toggleLanguage}
        onToggleTheme={toggleTheme}
      />
      <div className="pt-[60px] md:pt-0">
        <Outlet />
      </div>
    </>
  );
}

export default Layout;

