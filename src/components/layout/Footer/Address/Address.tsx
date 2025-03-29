import { ContactsBlock } from "@/components/services/components/ContactsBlock/ContactsBlock";
import { getTranslate } from "@/tolgee/server";
import { JSX } from "react";
import s from "./Address.module.scss";

export const Address = async (): Promise<JSX.Element> => {
  const t = await getTranslate();
  return (
    <address>
      <ul>
        <li className={s.address_item}>
          <p>{t("ourContacts.address")}</p>
        </li>
        <li className={s.address_item}>
          <ContactsBlock
            listClass={s.list_class}
            linkClass={s.contact_link}
            contentEmail={t("contacts.phone")}
          />
        </li>
      </ul>
    </address>
  );
};
