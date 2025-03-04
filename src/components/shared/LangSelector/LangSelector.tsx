"use client";

import { Select } from "@headlessui/react";
import React, { ChangeEvent, useState } from "react";

import { Icon } from "@/components/ui/Icon/Icon";
import { ALL_LANGUAGES } from "@/constants/constants";
import { setLanguage } from "@/tolgee/language";
import { useTolgee } from "@tolgee/react";
import s from "./langSelector.module.scss";

function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
  setLanguage(event.target.value);
}

export const LangSelector: React.FC = () => {
  const tolgee = useTolgee(["language"]);
  const language = tolgee.getLanguage();
  const [selectedLang, setSelectedLang] = useState(language);

  const handleLangChange = (lang: string) => {
    setSelectedLang(lang);
    setLanguage(lang);
  };

  return (
    <div className={s.selector_wrapper}>
      {/*Мобильная версия*/}
      <div className={s.lang_selector_wrapper_mobile}>
        <Select
          onChange={onSelectChange}
          value={language}
          className={s.lang_selector}
        >
          {ALL_LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
          {/*<option value="en">🇬🇧 English</option>*/}
          {/*<option value="uk">🇨🇿 Ukraine</option>*/}
        </Select>
        <span className={s.wrapper_mobile_icon}>
          <Icon type="lang" width={24} height={24} />
        </span>
      </div>

      {/*Планшет/Десктоп версия*/}
      <div className={s.lang_selector_wrapper_desc}>
        {ALL_LANGUAGES.map((lang, index) => (
          <button
            key={lang}
            onClick={() => handleLangChange(lang)}
            className={s.desc_btn}
            value={lang}
          >
            {lang}
            {selectedLang === lang && <span className={s.selected_lang}></span>}
            {index < ALL_LANGUAGES.length && (
              <Icon type="langDot" width={5} height={5} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
