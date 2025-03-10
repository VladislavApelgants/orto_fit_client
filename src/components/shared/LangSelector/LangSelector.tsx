"use client";

import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import React, { useState } from "react";

import { Icon } from "@/components/ui/Icon/Icon";
import { ALL_LANGUAGES } from "@/constants/constants";
import { setLanguage } from "@/tolgee/language";
import { useTolgee } from "@tolgee/react";
import s from "./langSelector.module.scss";

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
        <Listbox value={selectedLang} onChange={handleLangChange}>
          <div className={s.lang_selector_container}>
            <ListboxButton className={s.lang_selector}>
              {selectedLang}
            </ListboxButton>
            <ListboxOptions className={s.lang_options}>
              {ALL_LANGUAGES.map((lang) => (
                <ListboxOption
                  key={lang}
                  value={lang}
                  className={s.lang_option}
                >
                  {lang}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
        <span className={s.wrapper_mobile_icon}>
          <Icon type="lang" width={24} height={24} classnames={s.cartIcon} />
        </span>
      </div>
    </div>
  );
};
