import { getTranslate } from "@/tolgee/server";
import Link from "next/link";
import { FC, JSX } from "react";
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
          <Link href="/Home" className={s.nav_link}>
            {t("header.homeLink")}
          </Link>
        </li>
        <li>
          <Link href="/Home" className={s.nav_link}>
            {t("header.products")}
          </Link>
        </li>
        <li>
          <Link href="/Home" className={s.nav_link}>
            О нас
          </Link>
        </li>
        <li>
          <Link href="/Home" className={s.nav_link}>
            Доставка
          </Link>
        </li>
        <li>
          <Link href="/Home" className={s.nav_link}>
            {t("header.contacts")}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
