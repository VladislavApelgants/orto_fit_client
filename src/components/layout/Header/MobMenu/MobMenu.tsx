"use client";

import { useState } from "react";
import s from "./mobMenu.module.scss";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpenMobileMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleOpenMobileMenu}
        className={`${s.burger_btn} ${isOpen ? s.open : ""}`}
      >
        <span></span>
        {/* <span></span> */}
        <span></span>
      </button>
      <div
        className={`${s.mob_menu_container} ${
          isOpen ? s.openModal : s.closedModal
        }`}
      >
        <nav className=""></nav>
      </div>
    </>
  );
};
