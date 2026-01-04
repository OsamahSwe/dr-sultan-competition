import { Outlet } from "react-router-dom";
import MobileHeader from "../components/MobileHeader";

function Layout({ theme = "dark", onToggleTheme, language = "en", onToggleLanguage }) {
  return (
    <>
      <MobileHeader
        theme={theme}
        language={language}
        onToggleLanguage={onToggleLanguage}
        onToggleTheme={onToggleTheme}
      />
      <div className="pt-[60px] md:pt-0">
        <Outlet context={{ theme, onToggleTheme, language, onToggleLanguage }} />
      </div>
    </>
  );
}

export default Layout;

