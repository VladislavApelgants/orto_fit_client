import { Icon } from "@/components/ui/Icon/Icon";
import { JSX } from "react";
import s from "./cart.module.scss";

export const Cart = (): JSX.Element => {
  return (
    <button className={s.cart_btn} aria-label="Кнопка кошику товарів">
      <Icon
        type="shopBag"
        height={24}
        width={24}
        boxHeight={256}
        boxWidth={256}
        classnames={s.icon_cart}
      />
      <span className={s.count}>12</span>
    </button>
  );
};
