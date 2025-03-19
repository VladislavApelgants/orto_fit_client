import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import s from "./HealthInfo.module.scss";

export const HealthInfo: FC = () => {
  return (
    <section className={s.health_section}>
      <div className="container">
        <h2 className={s.health_title}>Здоровье и развитие</h2>
        <div className={s.content_wrapper}>
          <div className={s.content_block}>
            <p className={s.health_text}>
              Здоровье ребенка – основа его гармоничного развития.
              Ортопедические коврики помогают укреплять стопы, предотвращая
              плоскостопие и улучшая кровообращение. Они стимулируют мышцы,
              развивают координацию и делают ежедневные шаги малыша полезными и
              увлекательными!
            </p>
            <Link href="" className={s.product_link}>Перейти к товару</Link>
          </div>
          <div className={s.media_wrapper_container}>
            <div className={s.media_wrapper}>
              <Image
                src="/health/mats.jpg"
                alt="mats"
                width={500}
                height={600}
                className={s.mats}
                loading="lazy"
              />
              <Image
                src="/health/kidandmats.jpg"
                alt="mats"
                width={500}
                height={600}
                className={s.mats_kids}
                loading="lazy"
              />
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/2bM-wnAj1To"
                title="YouTube video player"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                className={s.video}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
