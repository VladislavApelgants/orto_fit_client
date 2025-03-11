import { Icon } from "@/components/ui/Icon/Icon";
import Link from "next/link";
import React, { FC } from "react";
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
        >
          <Icon
            type="instagram"
            height={28}
            width={28}
            classnames={iconClass}
          />
        </Link>
      </li>
      <li className={itemClass}>
        <Link
          href={"https://www.youtube.com/@chtoToTamCahnnel"}
          className={linkClass}
          target="_blank"
          rel="noopener norefferer nofollow"
        >
          <Icon type="youtube" height={28} width={28} classnames={iconClass} />
        </Link>
      </li>
      <li className={itemClass}>
        <Link
          href={"https://www.facebook.com"}
          className={linkClass}
          target="_blank"
          rel="noopener norefferer nofollow"
        >
          <Icon type="facebook" height={28} width={28} classnames={iconClass} />
        </Link>
      </li>
    </ul>
  );
};
