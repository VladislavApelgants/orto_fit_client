import { FC } from "react";
import { MessengerList } from "../../components/MessengerList/MessengerList";
import s from "./contactUs.module.scss";

export const ContactUs: FC = () => {
  return (
    <section className={s.contactUs_section}>
      <div className="container">
        <h2 className={s.contactUs_title}>Наши контакты</h2>
        <p className={s.contactUs_text}>
          Вы можете свзятаться с нами через удобный вам мессенджер
        </p>
        <MessengerList
          listClass={s.messenger_list}
          itemClass={s.messenger_item}
          LinkClass={s.messenger_link}
          imageClass={s.messenger_image}
        />
      </div>
    </section>
  );
};
