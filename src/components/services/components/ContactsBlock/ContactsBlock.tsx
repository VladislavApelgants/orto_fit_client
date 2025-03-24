import Link from "next/link";
import { FC } from "react";
type ContactsBlockTypes = {
  listClass?: string;
  linkClass?: string;
};

export const ContactsBlock: FC<ContactsBlockTypes> = ({
  listClass,
  linkClass,
}): React.JSX.Element => {
  return (
    <ul className={listClass}>
      <li>
        <Link href={"/"} className={linkClass}>
          Телефон: +38 (099) 234-09-86
        </Link>
      </li>
      <li>
        <Link href={"/"} className={linkClass}>
          Email: toystore@template.com
        </Link>
      </li>
    </ul>
  );
};
