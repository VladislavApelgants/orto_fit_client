import { FC } from "react";
import { CartList } from "./CartList/CartList";
import s from "./cart.module.scss";

export const Cart: FC = () => {
  return (
    <section className={s.cart_section}>
      <div className="container">
        <CartList />
      </div>
    </section>
  );
};
