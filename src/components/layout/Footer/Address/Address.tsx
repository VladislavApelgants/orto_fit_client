import { ContactsBlock } from "@/components/services/components/ContactsBlock/ContactsBlock";
import { JSX } from "react";
import s from "./Address.module.scss";

export const Address = (): JSX.Element => {
  return (
    <address>
      <ul>
        <li className={s.address_item}>
          <p>м.Дніпро</p>
        </li>
        <li className={s.address_item}>
          <ContactsBlock listClass={s.list_class} linkClass={s.contact_link} />
        </li>
      </ul>
    </address>
  );
};
