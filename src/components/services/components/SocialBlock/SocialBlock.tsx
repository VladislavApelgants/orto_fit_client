import { Icon } from "@/components/ui/Icon/Icon";
import Link from "next/link";
import React, { FC } from "react";
type SocialBlockTypes = {
  list?: string;
  items?: string;
  link?: string;
  icon?: string;
  size?: string;
};

export const SocialBlock: FC<SocialBlockTypes> = ({
  list,
  link,
  items,
  icon,
}): React.JSX.Element => {
  return (
    <ul className={list}>
      <li className={items}>
        <Link
          href={"https://www.instagram.com"}
          className={link}
          target="_blank"
          rel="noopener norefferer nofollow"
        >
          <Icon type="instagram" height={28} width={28} classnames={icon} />
        </Link>
      </li>
      <li className={items}>
        <Link
          href={"https://www.youtube.com/@chtoToTamCahnnel"}
          className={link}
          target="_blank"
          rel="noopener norefferer nofollow"
        >
          <Icon type="youtube" height={28} width={28} classnames={icon} />
        </Link>
      </li>
      <li className={items}>
        <Link
          href={"https://www.facebook.com"}
          className={link}
          target="_blank"
          rel="noopener norefferer nofollow"
        >
          <Icon type="facebook" height={28} width={28} classnames={icon} />
        </Link>
      </li>
    </ul>
  );
};
