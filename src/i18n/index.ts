import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import uz from "./uz.json";
import en from "./en.json";
import ru from "./ru.json";

// Only the shell (menus, top bar) is translated so far. Page content stays in Uzbek, as designed.
void i18n.use(initReactI18next).init({
  resources: { uz: { translation: uz }, en: { translation: en }, ru: { translation: ru } },
  lng: "uz",
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});
export default i18n;
