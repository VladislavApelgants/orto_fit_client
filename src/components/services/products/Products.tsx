import { mockDataMats } from "@/utils/mockDataMats";
import { FC, JSX } from "react";
import { ProductsList } from "../components/Products/ProductsList/ProductsList";
import s from "./products.module.scss";
type ProductsTypes = {
  query?: { category?: string };
};
export const Products: FC<ProductsTypes> = ({ query }): JSX.Element => {
  console.log("😎 ~ query:", query);
  return (
    <section className={s.products}>
      <div className="container">
        <ProductsList data={mockDataMats} />
      </div>
    </section>
  );
};
