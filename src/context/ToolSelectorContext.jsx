import { createContext, useContext, useState } from "react";

const ToolSelectorContext = createContext(null);

export function ToolSelectorProvider({ children }) {
  const [isToolSelectorOpen, setIsToolSelectorOpen] = useState(false);
  const [selectedTool, setSelectedTool] = useState("claude"); // Default to claude

  const openToolSelector = () => {
    setIsToolSelectorOpen(true);
  };

  const closeToolSelector = () => {
    setIsToolSelectorOpen(false);
  };

  const selectTool = (toolId) => {
    setSelectedTool(toolId);
    setIsToolSelectorOpen(false);
    
    // Smooth scroll to Tool Hero section after a brief delay to allow overlay to close
    setTimeout(() => {
      const toolHeroSection = document.getElementById("explore-tools");
      if (toolHeroSection) {
        const headerHeight = window.innerWidth < 768 ? 60 : 0;
        const elementPosition = toolHeroSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <ToolSelectorContext.Provider
      value={{
        isToolSelectorOpen,
        selectedTool,
        openToolSelector,
        closeToolSelector,
        selectTool,
      }}
    >
      {children}
    </ToolSelectorContext.Provider>
  );
}

export function useToolSelector() {
  const context = useContext(ToolSelectorContext);
  if (!context) {
    throw new Error("useToolSelector must be used within ToolSelectorProvider");
  }
  return context;
}
