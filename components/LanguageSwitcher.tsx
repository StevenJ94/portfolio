"use client";

import { useLanguage } from "@/lib/i18n";

function FlagCO() {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#FCD116" />
      <rect y="8" width="24" height="4" fill="#003893" />
      <rect y="12" width="24" height="4" fill="#CE1126" />
    </svg>
  );
}

function FlagUS() {
  return (
    <svg viewBox="0 0 24 16" aria-hidden="true">
      <rect width="24" height="16" fill="#B22234" />
      <rect y="1.23" width="24" height="1.23" fill="#fff" />
      <rect y="3.69" width="24" height="1.23" fill="#fff" />
      <rect y="6.15" width="24" height="1.23" fill="#fff" />
      <rect y="8.62" width="24" height="1.23" fill="#fff" />
      <rect y="11.08" width="24" height="1.23" fill="#fff" />
      <rect y="13.54" width="24" height="1.23" fill="#fff" />
      <rect width="10" height="8.6" fill="#3C3B6E" />
      <g fill="#fff">
        <circle cx="2" cy="1.8" r="0.5" />
        <circle cx="4.5" cy="1.8" r="0.5" />
        <circle cx="7" cy="1.8" r="0.5" />
        <circle cx="3.2" cy="3.4" r="0.5" />
        <circle cx="5.8" cy="3.4" r="0.5" />
        <circle cx="2" cy="5" r="0.5" />
        <circle cx="4.5" cy="5" r="0.5" />
        <circle cx="7" cy="5" r="0.5" />
        <circle cx="3.2" cy="6.6" r="0.5" />
        <circle cx="5.8" cy="6.6" r="0.5" />
      </g>
    </svg>
  );
}

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Idioma / Language">
      <button
        type="button"
        className={"lang-switch-btn" + (lang === "es" ? " is-active" : "")}
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        title="Español"
      >
        <FlagCO />
        <span>ES</span>
      </button>
      <button
        type="button"
        className={"lang-switch-btn" + (lang === "en" ? " is-active" : "")}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        title="English"
      >
        <FlagUS />
        <span>EN</span>
      </button>
    </div>
  );
}
