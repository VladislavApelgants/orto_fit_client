import { FC } from "react";
import { ContactsBlock } from "../../components/ContactsBlock/ContactsBlock";
import { MessengerList } from "../../components/MessengerList/MessengerList";
import s from "./ourContacts.module.scss";

export const OurContacts: FC = () => {
  return (
    <section className={s.our_contacts}>
      <div className="container">
        <div className={s.contacts_wrapper}>
          <div className={s.address_wrapper}>
            <h2 className={s.our_contacts_title}>Наши контакты</h2>
            <p className={s.city_address}>м.Дніпро, Лівобережний 3</p>
            <ContactsBlock
              linkClass={s.address_link}
              listClass={s.address_list}
            />
            <MessengerList
              listClass={s.messenger_list}
              itemClass={s.messenger_item}
              LinkClass={s.messenger_link}
              imageClass={s.messenger_image}
            />
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3904.5498066384403!2d35.02040996278151!3d48.5309807749292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sru!2sua!4v1742826270464!5m2!1sru!2sua"
              width="600"
              height="450"
              loading="lazy"
              allow="geolocation; fullscreen; encrypted-media"
              className={s.googlemaps}
              aria-label="Відображення де ми знаходимось на google maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
