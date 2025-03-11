import Link from "next/link";
import { JSX } from "react";
import s from "./infoBlock.module.scss";

export const InfoBlock = (): JSX.Element => {
  return (
    <ul className={s.info_list}>
      <li>
        <Link href={"/"}> Про нас</Link>
      </li>
      <li>
        <Link href={"/"}> Доставка і оплата</Link>
      </li>
      <li>
        <Link href={"/"}> Політика безпеки</Link>
      </li>
      <li>
        <Link href={"/"}> Умови повернення та обміну</Link>
      </li>
      <li>
        <Link href={"/"}> Договір Публічної Оферти</Link>
      </li>
    </ul>
  );
};
