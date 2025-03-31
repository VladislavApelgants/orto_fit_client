"use client";

import { Icon } from "@/components/ui/Icon/Icon";
import { ALL_LANGUAGES } from "@/constants/constants";
import { setLanguage } from "@/tolgee/language";
import { useTolgee } from "@tolgee/react";
import { useEffect, useRef, useState } from "react";
import s from "./langSelector.module.scss";

export const LangSelector: React.FC = () => {
  const tolgee = useTolgee(["language"]);
  const language = tolgee.getLanguage();
  const [selectedLang, setSelectedLang] = useState(language);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setLanguage(lang);
    setIsOpen(false); // Закрываем меню при выборе
  };

  // Закрываем список при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={s.selector_wrapper} ref={dropdownRef}>
      <div className={s.lang_selector_wrapper_mobile}>
        <button className={s.lang_selector} onClick={() => setIsOpen(!isOpen)}>
          {selectedLang}
        </button>
        {isOpen && (
          <div className={s.lang_options}>
            {ALL_LANGUAGES.map((lang) => (
              <button
                key={lang}
                className={s.lang_option}
                onClick={() => handleLangChange(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
        <span className={s.wrapper_mobile_icon}>
          <Icon type="lang" width={24} height={24} classnames={s.cartIcon} />
        </span>
      </div>
    </div>
  );
};
