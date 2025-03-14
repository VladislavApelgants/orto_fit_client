import { mockDataMatsType } from "@/utils/mockDataMats";
import { FC } from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import s from "./productsList.module.scss";

type ProductsListType = {
  data: mockDataMatsType[];
};
export const ProductsList: FC<ProductsListType> = ({ data }) => {
  return (
    <ul className={s.product_list}>
      {data &&
        data.map(({ presentImage, title, price, id }) => (
          <ProductCard
            image={presentImage}
            title={title}
            price={price}
            key={id}
          />
        ))}
    </ul>
  );
};
