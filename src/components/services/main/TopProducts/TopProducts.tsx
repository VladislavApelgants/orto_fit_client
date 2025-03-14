import { Icon } from "@/components/ui/Icon/Icon";
import { mockDataMats } from "@/utils/mockDataMats";
import { mockDataToys } from "@/utils/mockDataToys";
import Link from "next/link";
import { FC, JSX } from "react";
import { ProductsList } from "../../components/Products/ProductsList/ProductsList";
import s from "./topProducts.module.scss";

type TopProductsTypes = {
  title: string;
  contentFlag: "fit" | "toys";
};
export const TopProducts: FC<TopProductsTypes> = ({
  title,
  contentFlag,
}): JSX.Element => {
  const data = contentFlag === "fit" ? mockDataMats : mockDataToys;
  return (
    <section className={s.section}>
      <div className="container">
        <div className={s.head_block}>
          <h2 className={s.section_title}>{title}</h2>
          <Link href="/" className={s.more_link}>
            Смотреть больше
            <Icon
              type="arrowRight"
              width={14}
              height={10}
              classnames={s.arrow_icon}
            />
          </Link>
        </div>
        <div className={s.product_block}>
          <ProductsList data={data} />
        </div>
      </div>
    </section>
  );
};
