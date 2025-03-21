"use client";
import Image from "next/image";
import { FC, useState } from "react";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./reviewsList.module.scss";
import "./swiperReview.scss";
const images = [
  { id: 1, src: "/reviews/olx/rev1.jpg", alt: "Відгук з ОЛХ 1" },
  { id: 2, src: "/reviews/olx/rev2.jpg", alt: "Відгук з ОЛХ 2" },
  { id: 3, src: "/reviews/olx/rev3.jpg", alt: "Відгук з ОЛХ 3" },
  { id: 4, src: "/reviews/olx/rev4.jpg", alt: "Відгук з ОЛХ 4" },
  { id: 5, src: "/reviews/olx/rev5.jpg", alt: "Відгук з ОЛХ 5" },
  { id: 6, src: "/reviews/olx/rev6.jpg", alt: "Відгук з ОЛХ 6" },
  { id: 7, src: "/reviews/olx/rev7.jpg", alt: "Відгук з ОЛХ 7" },
  { id: 8, src: "/reviews/olx/rev8.jpg", alt: "Відгук з ОЛХ 8" },
  { id: 9, src: "/reviews/olx/rev9.jpg", alt: "Відгук з ОЛХ 9" },
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
          <div className={s.modal_content}>
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
