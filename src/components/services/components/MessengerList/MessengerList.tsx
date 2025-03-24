import Image from "next/image";
import { FC } from "react";

type MessengerListTypes = {
  listClass?: string;
  itemClass?: string;
  LinkClass?: string;
  imageClass?: string;
};
export const MessengerList: FC<MessengerListTypes> = ({
  listClass,
  itemClass,
  LinkClass,
  imageClass,
}) => {
  return (
    <ul className={listClass}>
      <li className={itemClass}>
        <a href="https://t.me/Orto_Fit_Shop" className={LinkClass}>
          <Image
            src="/contactUs/telegram_row.svg"
            alt="icon telegram"
            width={200}
            height={100}
            className={imageClass}
          />
        </a>
      </li>
      <li className={itemClass}>
        <a href="viber://chat?number=+380992340986" className={LinkClass}>
          <Image
            src="/contactUs/viber_row2.svg"
            alt="icon viber"
            width={200}
            height={100}
            className={imageClass}
          />
        </a>
      </li>
    </ul>
  );
};
