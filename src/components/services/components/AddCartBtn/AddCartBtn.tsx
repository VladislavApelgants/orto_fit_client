"use client";

import { CartItem, useCartStore } from "@/stores/cartStore";
import { FC } from "react";
type CartItemTypes = {
  product: CartItem;
  classes: string;
  aria: string;
};
export const AddCartBtn: FC<CartItemTypes> = ({ product, classes, aria }) => {
  const addItem = useCartStore((state) => state.addItem);

  return (
    <button
      type="button"
      className={classes}
      onClick={() => addItem({ ...product, quantity: 1 })}
      aria-label={aria}
    >
      Добавить в корзину
    </button>
  );
};
