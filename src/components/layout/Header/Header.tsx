import { Cart } from "@/components/services/components/Cart/Cart";
import { Logo } from "@/components/services/components/Logo/Logo";
import { LangSelector } from "@/components/shared/LangSelector/LangSelector";
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
            <Logo logoClass={s.header_logo} />
            <Nav
              navClass={s.nav_block}
              navLink={s.navLink}
              navList={s.navList}
            />
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
