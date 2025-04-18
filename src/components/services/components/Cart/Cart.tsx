"use client";
import { Icon } from "@/components/ui/Icon/Icon";
import { useCartStore } from "@/stores/cartStore";
import Link from "next/link";
import { JSX } from "react";
import s from "./cart.module.scss";

export const Cart = (): JSX.Element => {
  const items = useCartStore((state) => {
    // console.log("😎 ~ items ~ state:", state);
    return state.items;
  });
  // const total = useCartStore((state) => state.total);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <Link
      href="/cart"
      className={s.cart_btn}
      aria-label="Кнопка кошику товарів"
    >
      <Icon
        type="shopBag"
        height={24}
        width={24}
        boxHeight={256}
        boxWidth={256}
        classnames={s.icon_cart}
      />
      <span className={s.count}>{totalCount}</span>
    </Link>
  );
};
