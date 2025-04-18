import { mockDataMatsType } from "@/utils/mockDataMats";
import { FC } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import s from "./productsList.module.scss";
type ProductsListTypes = {
  data: mockDataMatsType[];
};
export const ProductsList: FC<ProductsListTypes> = ({ data }) => {
  return (
    <ul className={s.list}>
      {data &&
        data.map(({ presentImage, title, price, configuration, id }) => (
          <li key={id} className={s.item}>
            <ProductCard
              id={id}
              image={presentImage}
              title={title}
              price={price}
              count={configuration}
            />
          </li>
        ))}
    </ul>
  );
};
