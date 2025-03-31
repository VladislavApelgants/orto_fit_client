"use client";

import { ContactsBlock } from "@/components/services/components/ContactsBlock/ContactsBlock";
import { SocialBlock } from "@/components/services/components/SocialBlock/SocialBlock";
import { LangSelector } from "@/components/shared/LangSelector/LangSelector";
import { useTranslate } from "@tolgee/react";
import { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import { Cart } from "../../../services/components/Cart/Cart";
import { Nav } from "../Nav/Nav";
import s from "./mobMenu.module.scss";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width } = useWindowSize();

  const { t } = useTranslate();

  useEffect(() => {
    if (width >= 768) {
      setIsOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [width]);

  const toggleOpenMobileMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? "hidden" : "auto";
  };

  return (
    <>
      <button
        onClick={toggleOpenMobileMenu}
        className={`${s.burger_btn} ${isOpen ? s.open : ""}`}
        aria-label="Зачинити модальне вікно"
      >
        <span></span>
        <span></span>
      </button>
      <div
        className={`${s.mob_menu_container} ${
          isOpen ? s.openModal : s.closedModal
        }`}
      >
        <div className={s.serviceBlockWrapper}>
          <div className={s.serviceBlock}>
            <LangSelector />
            <div className={s.separator}></div>
            <Cart />
          </div>
        </div>
        <Nav navList={s.navList} navLink={s.navLink} navClass={s.navClass} />
        <ContactsBlock
          listClass={s.contactslList}
          linkClass={s.contactLink}
          contentEmail={t("contacts.phone")}
        />
        <SocialBlock
          listClass={s.socialList}
          iconClass={s.socialIcon}
          linkClass={s.socialLink}
        />
      </div>
    </>
  );
};
