import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import s from "./socialBlock.module.scss";

export const SocialBlock: FC = (): React.JSX.Element => {
  return (
    <ul className={s.social_block}>
      <li>
        <Link href={"https://www.instagram.com"} className={s.social_link}>
          <Image
            src="/social/insta.svg"
            alt="instagram"
            width={28}
            height={28}
          />
        </Link>
      </li>
      <li>
        <Link
          href={"https://www.youtube.com/@chtoToTamCahnnel"}
          className={s.social_link}
        >
          <Image
            src="/social/youtube.svg"
            alt="youtube"
            width={28}
            height={28}
          />
        </Link>
      </li>
      <li>
        <Link href={"https://www.facebook.com"} className={s.social_link}>
          <Image
            src="/social/facebook.svg"
            alt="youtube"
            width={28}
            height={28}
          />
        </Link>
      </li>
    </ul>
  );
};
