import { ContactsBlock } from "@/components/services/components/ContactsBlock/ContactsBlock";
import { JSX } from "react";

export const Address = (): JSX.Element => {
  return (
    <address>
      <ul>
        <li>
          {/* <p>Адресс</p> */}
          <p>г.Днепр</p>
        </li>
        <li>
          <ContactsBlock />
        </li>
      </ul>
    </address>
  );
};
