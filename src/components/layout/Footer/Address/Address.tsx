import { ContactsBlock } from "@/components/services/components/ContactsBlock/ContactsBlock";
import { JSX } from "react";
import s from "./Address.module.scss";

export const Address = (): JSX.Element => {
  return (
    <address>
      <ul>
        <li>
          {/* <p>Адресс</p> */}
          <p>г.Днепр</p>
        </li>
        <li>
          <ContactsBlock linkClass={s.contact_link} />
        </li>
      </ul>
    </address>
  );
};
