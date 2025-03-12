import Image from "next/image";
import { JSX } from "react";

const mockData = [
  {
    id: Math.random() + Date.now(),
    imageUrl: "/categories/wooden.png",
    categoryName: "Wooden Toys",
  },
  {
    id: Math.random() + Date.now(),
    imageUrl: "/categories/stuffed.png",
    categoryName: "Wooden Toys",
  },
];
export const Categories = (): JSX.Element => {
  return (
    <section>
      <ul className="">
        {mockData &&
          mockData.map(({ id, imageUrl, categoryName }) => (
            <li key={id}>
              <Image
                src={imageUrl}
                alt={categoryName}
                width={200}
                height={200}
              />
              <p>{categoryName}</p>
              <button type="button">Начать покупки</button>
            </li>
          ))}
      </ul>
    </section>
  );
};
