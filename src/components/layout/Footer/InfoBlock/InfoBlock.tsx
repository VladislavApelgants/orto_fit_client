import { getTranslate } from "@/tolgee/server";
import Link from "next/link";
import { JSX } from "react";
import s from "./infoBlock.module.scss";

export const InfoBlock = async (): Promise<JSX.Element> => {
  const t = await getTranslate();

  return (
    <ul className={s.info_list}>
      <li>
        <Link href={"/"} className={s.info_link}>
          {t("underFooter.aboutUs")}
        </Link>
      </li>
      <li>
        <Link href={"/"} className={s.info_link}>
          {t("underFooter.delivery")}
        </Link>
      </li>
      <li>
        <Link href={"/"} className={s.info_link}>
          {t("underFooter.politics")}
        </Link>
      </li>
      <li>
        <Link href={"/"} className={s.info_link}>
          {t("underFooter.condition")}
        </Link>
      </li>
      <li>
        <Link href={"/"} className={s.info_link}>
          {t("underFooter.contract")}
        </Link>
      </li>
    </ul>
  );
};
