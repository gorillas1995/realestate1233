"use client";

import { useLanguage } from "@/contexts/language-context";
import { Language } from "@/lib/translations";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const newLang: Language = language === "en" ? "es" : "en";
    setLanguage(newLang);
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className="hidden lg:flex fixed top-6 right-6 z-[100] bg-white/95 backdrop-blur-md border border-border rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 items-center gap-2 group cursor-pointer"
      aria-label="Switch language"
    >
      <span
        className={`text-sm font-semibold transition-colors duration-300 pointer-events-none ${
          language === "en"
            ? "text-primary"
            : "text-muted-foreground group-hover:text-foreground"
        }`}
      >
        EN
      </span>
      <span className="text-muted-foreground pointer-events-none">/</span>
      <span
        className={`text-sm font-semibold transition-colors duration-300 pointer-events-none ${
          language === "es"
            ? "text-primary"
            : "text-muted-foreground group-hover:text-foreground"
        }`}
      >
        ES
      </span>
    </button>
  );
}
