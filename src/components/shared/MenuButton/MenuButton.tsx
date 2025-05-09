import { Icon } from "@/components/ui/Icon/Icon";
import { JSX } from "react";
import s from "./menuButton.module.scss";

export const MenuButton = (): JSX.Element => {
  return (
    <button className={s.button} aria-label="Кнопка відчинити мобільне меню">
      <Icon type="menu" width={28} height={28} />
    </button>
  );
};
