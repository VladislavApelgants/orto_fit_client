"use client";
import { useTranslate } from "@tolgee/react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <nav className={navClass}>
      <ul className={`${s.nav_list} ${navList}`}>
        <li
          className={clsx(
            s.nav_item,
            navItem,
            pathname === "/" ? s.active : null
          )}
        >
          <Link href="/" className={clsx(navLink)}>
            {t("header.homeLink")}
          </Link>
        </li>
        <li
          className={clsx(
            s.nav_item,
            navItem,
            pathname === "/products" ? s.active : null
          )}
        >
          <Link href="/" className={clsx(navLink)}>
            {t("header.products")}
          </Link>
        </li>
        <li
          className={clsx(
            s.nav_item,
            navItem,
            pathname === "/about_us" ? s.active : null
          )}
        >
          <Link href="/" className={clsx(navLink)}>
            {t("header.aboutUS")}
          </Link>
        </li>
        <li
          className={clsx(
            s.nav_item,
            navItem,
            pathname === "/delivery" ? s.active : null
          )}
        >
          <Link href="/" className={clsx(navLink)}>
            {t("header.delivery")}
          </Link>
        </li>
        <li
          className={clsx(
            s.nav_item,
            navItem,
            pathname === "/contacts" ? s.active : null
          )}
        >
          <Link href="/" className={clsx(navLink)}>
            {t("header.contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
