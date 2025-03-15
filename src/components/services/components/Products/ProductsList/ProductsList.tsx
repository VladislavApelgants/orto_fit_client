"use client";
import { mockDataMatsType } from "@/utils/mockDataMats";
import { FC } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductCard } from "../ProductCard/ProductCard";

type ProductsListType = {
  data: mockDataMatsType[];
};
export const ProductsList: FC<ProductsListType> = ({ data }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={24}
      centeredSlides={false}
      modules={[Pagination, Navigation]}
      // navigation={true}
      pagination={{
        type: "progressbar",
      }}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      }}
      observer={true}
      observeParents={true}
      watchSlidesProgress={true}
    >
      {data &&
        data.map(({ presentImage, title, price, configuration, id }) => (
          <SwiperSlide key={id}>
            <ProductCard
              image={presentImage}
              title={title}
              price={price}
              count={configuration}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
