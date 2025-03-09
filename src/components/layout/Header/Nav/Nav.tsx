"use client";
import { useTranslate } from "@tolgee/react";
import Link from "next/link";
import { FC, JSX } from "react";
import s from "./nav.module.scss";

type NavTypes = {
  navClass?: string;
  navItem?: string;
  navList?: string;
  navLink?: string;
};

export const Nav: FC<NavTypes> = ({
  navClass,
  navItem,
  navList,
  navLink,
}): JSX.Element => {
  const { t } = useTranslate();

  return (
    <nav className={navClass}>
      <ul className={`${s.nav_list} ${navList}`}>
        <li className={navItem}>
          <Link href="/Home" className={`${s.nav_link} ${navLink}`}>
            {t("header.homeLink")}
          </Link>
        </li>
        <li className={navItem}>
          <Link href="/Home" className={`${s.nav_link} ${navLink}`}>
            {t("header.products")}
          </Link>
        </li>
        <li className={navItem}>
          <Link href="/Home" className={`${s.nav_link} ${navLink}`}>
            О нас
          </Link>
        </li>
        <li className={navItem}>
          <Link href="/Home" className={`${s.nav_link} ${navLink}`}>
            Доставка
          </Link>
        </li>
        <li className={navItem}>
          <Link href="/Home" className={`${s.nav_link} ${navLink}`}>
            {t("header.contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
