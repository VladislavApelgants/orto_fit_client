"use client";
import { useCartStore } from "@/stores/cartStore";
import Image from "next/image";
import { FC } from "react";
import s from "./cartList.module.scss";

export const CartList: FC = () => {
  const { increaseItem, decreaseItem, removeItem } = useCartStore();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total);
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className={s.cart_list_wrapper}>
      <ul className={s.cart_list}>
        {items.map(({ image, title, price, id, quantity }) => (
          <li key={id} className={s.cart_list_item}>
            <Image
              src={image}
              alt="some"
              width={364}
              height={364}
              className={s.image}
            />
            <div>
              <p>{title}</p>
              <p>Цена: {price} грн</p>
              <p>
                Количество:
                <button
                  onClick={() => decreaseItem(id)}
                  disabled={quantity <= 1}
                >
                  -
                </button>
                {quantity} шт{" "}
                <button onClick={() => increaseItem(id)}>+</button>
              </p>
            </div>
            <button className={s.remove_product} onClick={() => removeItem(id)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <div className={s.price_wrapper}>
        <p>Выбрано элементов: {totalCount} шт</p>
        <p>К оплате: {total} грн</p>
      </div>
    </div>
  );
};
