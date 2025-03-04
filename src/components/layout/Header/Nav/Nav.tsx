import { getTranslate } from "@/tolgee/server";
import Link from "next/link";
import React, {FC, JSX} from "react";
import s from "./nav.module.scss";

type NavTypes = {
  navClass?: string;
};

export const Nav: FC<NavTypes> = async ({ navClass }): Promise<JSX.Element> => {
  const t = await getTranslate();
  return (
    <nav className={navClass}>
      <ul className={s.nav_list}>
        <li>
          <Link href="/Home">{t("header.homeLink")}</Link>
        </li>
        <li>
          <Link href="/Home">{t("header.products")}</Link>
        </li>
        <li>
          <Link href="/Home">О нас</Link>
        </li>
        <li>
          <Link href="/Home">Доставка</Link>
        </li>
        <li>
          <Link href="/Home">{t("header.contacts")}</Link>
        </li>
      </ul>
    </nav>
  );
};
