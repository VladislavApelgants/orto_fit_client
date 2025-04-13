import { FC, JSX } from "react";
import { ProductsList } from "../components/Products/ProductsList/ProductsList";
import { Categories } from "../main/Categories/Categories";
import { TopProducts } from "../main/TopProducts/TopProducts";
import { getProductsByCategory } from "./getProductsByCategory";
import s from "./products.module.scss";
type ProductsTypes = {
  query?: { category?: string };
};
export const Products: FC<ProductsTypes> = async ({
  query,
}): Promise<JSX.Element> => {
  const data = await getProductsByCategory(query?.category);
  const hasData = query?.category && data.length > 0;

  return (
    <>
      {hasData ? (
        <section className={s.products}>
          <div className="container">
            <ProductsList data={data} />
          </div>
        </section>
      ) : (
        <>
          <Categories />
          <TopProducts contentFlag="massage" />
          <TopProducts contentFlag="toys" />
        </>
      )}
    </>
  );
};
