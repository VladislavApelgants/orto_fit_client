import Link from "next/link";
import { FC } from "react";
import s from "./contactsBlock.module.scss";

export const ContactsBlock: FC = (): React.JSX.Element => {
  return (
    <ul className={s.contacts_block}>
      <li>
        <Link href={"/"}>Call Us: +1 213 974-5898</Link>
      </li>
      <li>
        <Link href={"/"}>Email:toystore@template.com</Link>
      </li>
    </ul>
  );
};
