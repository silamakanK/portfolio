import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations } from "@/data/translations";

const LocaleContext = createContext({
  locale: "fr",
  setLocale: () => {},
  toggleLocale: () => {},
  content: translations.fr,
});

const STORAGE_KEY = "sk-locale";

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const storedLocale = window.localStorage.getItem(STORAGE_KEY);
    if (storedLocale === "fr" || storedLocale === "en") {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale: () => setLocale((prev) => (prev === "fr" ? "en" : "fr")),
      content: translations[locale] ?? translations.fr,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useTranslations() {
  return useContext(LocaleContext);
}
