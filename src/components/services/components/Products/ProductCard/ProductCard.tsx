import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./productCard.module.scss";

export type ProductCardType = {
  image: string;
  title: string;
  price: number;
};

export const ProductCard: FC<ProductCardType> = ({ image, title, price }) => {
  return (
    <li className={s.item}>
      <Link href="/">
        <Image src={image} alt="some" width={364} height={364} />
        <h3>{title}</h3>
        <p>Description</p>
        <p>{price}грн</p>
        <button type="button">Добавить в корзину / уже добавлено</button>
      </Link>
    </li>
  );
};
