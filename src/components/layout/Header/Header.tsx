import {LangSelector} from "@/components/shared/LangSelector/LangSelector";
import {getTranslate} from "@/tolgee/server";
import Link from "next/link";
import {JSX} from "react";
import s from "./header.module.scss";
import {Nav} from "./Nav/Nav";
import {MenuButton} from "@/components/shared/MenuButton/MenuButton";
import {Cart} from "@/components/layout/Header/Cart/Cart";

export const Header = async (): Promise<JSX.Element> => {
    const t = await getTranslate();
    console.log("😎 ~ Header ~  t:", t("header.products"));

    return (
        <header className={s.header}>
            <div className={`container`}>
                <div className={s.header_wrapper}>
                    <div className={s.header_nav_block}>
                        <Link href="/" className={s.header_logo}>
                            MaryOrtoFit
                        </Link>
                        <Nav navClass={s.nav_block}/>
                        <MenuButton/>
                    </div>
                    <div className={s.header_service_block}>
                        <Cart/>
                        <LangSelector/>
                    </div>
                </div>
            </div>
        </header>
    );
};
