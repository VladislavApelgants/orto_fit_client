import { getTranslate } from "@/tolgee/server";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";
import s from "./categories.module.scss";

const mockData = [
  {
    id: Math.random() + Date.now(),
    imageUrl: "/categories/stuffed.png",
    categoryName: "Stuffed Toys",
  },
  {
    id: Math.random() + Date.now(),
    imageUrl: "/categories/wooden.png",
    categoryName: "Wooden Toys",
  },
  {
    id: Math.random() + Date.now(),
    imageUrl: "/categories/stuffed.png",
    categoryName: "Stuffed Toys",
  },
  {
    id: Math.random() + Date.now(),
    imageUrl: "/categories/wooden.png",
    categoryName: "Wooden Toys",
  },
];
export const Categories = async (): Promise<JSX.Element> => {
  const t = await getTranslate();
  return (
    <section className={s.category_section}>
      <h2 className="hidden">{t("categories.categoryTitle")}</h2>
      <div className="container">
        <ul className={s.categories_list}>
          {mockData &&
            mockData.map(({ id, imageUrl, categoryName }) => (
              <li key={id} className={s.categories_item}>
                <Image
                  src={imageUrl}
                  alt={categoryName}
                  width={220}
                  height={220}
                  className={s.categories_image}
                />
                <div className={s.info_block}>
                  <h3 className={s.card_itle}>{categoryName}</h3>
                  <Link href="/" className={s.card_link}>
                    {t("categories.allProducts")}
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
