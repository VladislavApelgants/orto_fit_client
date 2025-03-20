"use client";
import Image from "next/image";
import { FC, useState } from "react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./reviewsList.module.scss";
const images = [
  { id: 1, src: "/fakeReviews/olx/rev1.jpg", alt: "Отзыв 1" },
  { id: 2, src: "/fakeReviews/olx/rev2.jpg", alt: "Отзыв 2" },
  { id: 3, src: "/fakeReviews/olx/rev3.jpg", alt: "Отзыв 3" },
  { id: 4, src: "/fakeReviews/olx/rev4.jpg", alt: "Отзыв 4" },
  { id: 5, src: "/fakeReviews/olx/rev5.jpg", alt: "Отзыв 5" },
  { id: 6, src: "/fakeReviews/olx/rev6.jpg", alt: "Отзыв 6" },
  { id: 7, src: "/fakeReviews/olx/rev7.jpg", alt: "Отзыв 7" },
  { id: 8, src: "/fakeReviews/olx/rev8.jpg", alt: "Отзыв 8" },
];

export const ReviewsList: FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={24}
        centeredSlides={false}
        modules={[Pagination]}
        pagination={{
          type: "bullets",
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
        {images.map(({ id, src, alt }) => (
          <SwiperSlide key={id}>
            <Image
              src={src}
              alt={alt}
              width={400}
              height={650}
              className={s.review_image}
              onClick={() => setSelectedImage(src)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {selectedImage && (
        <div className={s.modal} onClick={() => setSelectedImage(null)}>
          <div className={s.modal_content} onClick={(e) => e.stopPropagation()}>
            <button className={s.close} onClick={() => setSelectedImage(null)}>
              <span></span>
              <span></span>
            </button>
            <Image
              src={selectedImage}
              alt="Просмотр фото"
              width={500}
              height={800}
            />
          </div>
        </div>
      )}
    </>
  );
};
