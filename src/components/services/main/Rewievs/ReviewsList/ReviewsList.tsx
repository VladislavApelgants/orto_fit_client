"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export const ReviewsList: FC = () => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={24}
      centeredSlides={false}
      //   modules={[Pagination, Navigation]}
      // navigation={true}
      //   pagination={{
      //     type: "progressbar",
      //   }}
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
      <SwiperSlide>
        <h3>Это слайд отзыва1</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>Это слайд отзыва2</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>Это слайд отзыва3</h3>
      </SwiperSlide>
      <SwiperSlide>
        <h3>Это слайд отзыва4</h3>
      </SwiperSlide>
    </Swiper>
  );
};
