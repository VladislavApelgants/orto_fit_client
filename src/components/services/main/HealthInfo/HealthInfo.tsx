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
          </div>
          <div>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/2bM-wnAj1To"
              title="YouTube video player"
              //   frameBorder="0"
              //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
