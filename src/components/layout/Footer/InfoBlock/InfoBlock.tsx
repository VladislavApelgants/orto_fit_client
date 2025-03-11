import Link from "next/link";
import { JSX } from "react";
import s from "./infoBlock.module.scss";

export const InfoBlock = (): JSX.Element => {
  return (
    <ul className={s.info_list}>
      <li>
        <Link href={"/"} className={s.info_link}>
          {" "}
          Про нас
        </Link>
      </li>
      <li>
        <Link href={"/"} className={s.info_link}>
          {" "}
          Доставка і оплата
        </Link>
      </li>
      <li>
        <Link href={"/"} className={s.info_link}>
          {" "}
          Політика безпеки
        </Link>
      </li>
      <li>
        <Link href={"/"} className={s.info_link}>
          {" "}
          Умови повернення та обміну
        </Link>
      </li>
      <li>
        <Link href={"/"} className={s.info_link}>
          {" "}
          Договір Публічної Оферти
        </Link>
      </li>
    </ul>
  );
};
