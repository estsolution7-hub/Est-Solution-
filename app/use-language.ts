"use client";

import { useCallback, useEffect, useState } from "react";

export type Language = "EN" | "KR";

const STORAGE_KEY = "est-language";
const CHANGE_EVENT = "est-language-change";

function readStored(): Language {
  if (typeof window === "undefined") return "EN";
  return window.localStorage.getItem(STORAGE_KEY) === "KR" ? "KR" : "EN";
}

function persist(next: Language) {
  window.localStorage.setItem(STORAGE_KEY, next);
  document.cookie = `${STORAGE_KEY}=${next}; path=/; max-age=31536000; SameSite=Lax`;
  document.documentElement.lang = next === "KR" ? "ko" : "en";
}

/**
 * Site-wide language. Persists to localStorage and syncs every mounted component
 * — without this, each page held its own state and the switcher appeared to do
 * nothing when you navigated from the homepage to a sub-page.
 */
export function useLanguage(): [Language, (next: Language) => void, boolean] {
  // Start on EN so server and first client render agree, then adopt the stored
  // value on mount. Avoids a hydration mismatch.
  const [language, setLanguageState] = useState<Language>("EN");

  useEffect(() => {
    setLanguageState(readStored());
    const sync = () => setLanguageState(readStored());
    window.addEventListener(CHANGE_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGE_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const setLanguage = useCallback((next: Language) => {
    persist(next);
    setLanguageState(next);
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "KR" ? "ko" : "en";
  }, [language]);

  return [language, setLanguage, language === "KR"];
}
