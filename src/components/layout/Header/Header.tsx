import { Cart } from "@/components/layout/Header/Cart/Cart";
import { LangSelector } from "@/components/shared/LangSelector/LangSelector";
import Link from "next/link";
import { JSX } from "react";
import s from "./header.module.scss";
import { MobileMenu } from "./MobMenu/MobMenu";
import { Nav } from "./Nav/Nav";

export const Header = async (): Promise<JSX.Element> => {
  return (
    <header className={s.header}>
      <div className={`container`}>
        <div className={s.header_wrapper}>
          <div className={s.header_nav_block}>
            <Link href="/" className={s.header_logo}>
              MaryOrtoFit
            </Link>
            <Nav navClass={s.nav_block} />
            <MobileMenu />
          </div>
          <div className={s.header_service_block}>
            <Cart />
            <LangSelector />
          </div>
        </div>
      </div>
    </header>
  );
};
