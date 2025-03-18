import Image from "next/image";
import { FC } from "react";
import s from "./contactUs.module.scss";

export const ContactUs: FC = () => {
  return (
    <section className={s.contactUs_section}>
      <div className="container">
        <h2 className={s.contactUs_title}>Наши контакты</h2>
        <p className={s.contactUs_text}>
          Вы можете свзятаться с нами через удобный вам мессенджер
        </p>
        <ul className={s.messenger_list}>
          <li className={s.messenger_item}>
            <a href="https://t.me/Orto_Fit_Shop" className={s.messenger_link}>
              <Image
                src="/contactUs/telegram_row.svg"
                alt="icon telegram"
                width={200}
                height={100}
                className={s.messenger_image}
              />
            </a>
          </li>
          <li className={s.messenger_item}>
            <a
              href="viber://chat?number=+380992340986"
              className={s.messenger_link}
            >
              <Image
                src="/contactUs/viber_row2.svg"
                alt="icon viber"
                width={200}
                height={100}
                className={s.messenger_image}
              />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
