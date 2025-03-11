import { ContactsBlock } from "@/components/services/components/ContactsBlock/ContactsBlock";
import { SocialBlock } from "@/components/services/components/SocialBlock/SocialBlock";
import React from "react";
import s from "./head.module.scss";

export const HeadContacts = (): React.JSX.Element => {
  return (
    <div className={s.head_contacts}>
      <div className={`container`}>
        <div className={s.contacts_block}>
          <ContactsBlock
            listClass={s.contacts_list}
            linkClass={s.contact_link}
          />
          <SocialBlock listClass={s.social_block} linkClass={s.socialLink} />
        </div>
      </div>
    </div>
  );
};
