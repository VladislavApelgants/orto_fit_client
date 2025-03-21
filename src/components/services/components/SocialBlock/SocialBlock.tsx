import { Icon } from "@/components/ui/Icon/Icon";
import clsx from "clsx";
import Link from "next/link";
import React, { FC } from "react";
import s from "./socialBlock.module.scss";
type SocialBlockTypes = {
  listClass?: string;
  itemClass?: string;
  linkClass?: string;
  iconClass?: string;
};

export const SocialBlock: FC<SocialBlockTypes> = ({
  listClass,
  itemClass,
  linkClass,
  iconClass,
}): React.JSX.Element => {
  return (
    <ul className={listClass}>
      <li className={itemClass}>
        <Link
          href={"https://www.instagram.com"}
          className={linkClass}
          target="_blank"
          rel="noopener norefferer nofollow"
          aria-label="Посилання на instagram"
        >
          <Icon
            type="instagram"
            height={28}
            width={28}
            classnames={clsx(s.icon, iconClass)}
          />
        </Link>
      </li>
      <li className={itemClass}>
        <Link
          href={"https://www.youtube.com/@chtoToTamCahnnel"}
          className={clsx(s.link, linkClass)}
          target="_blank"
          rel="noopener norefferer nofollow"
          aria-label="Посилання на youtube"
        >
          <Icon
            type="youtube"
            height={28}
            width={28}
            classnames={clsx(s.icon, iconClass)}
          />
        </Link>
      </li>
      <li className={itemClass}>
        <Link
          href={"https://www.facebook.com"}
          className={clsx(s.link, linkClass)}
          target="_blank"
          rel="noopener norefferer nofollow"
          aria-label="Посилання на facebook"
        >
          <Icon
            type="facebook"
            height={28}
            width={28}
            classnames={clsx(s.icon, iconClass)}
          />
        </Link>
      </li>
    </ul>
  );
};
