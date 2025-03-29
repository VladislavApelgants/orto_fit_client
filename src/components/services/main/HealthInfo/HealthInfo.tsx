import { getTranslate } from "@/tolgee/server";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import s from "./HealthInfo.module.scss";
import { VideoComponent } from "./VideoComponent/VideoComponent";

export const HealthInfo: FC = async () => {
  const t = await getTranslate();

  return (
    <section className={s.health_section}>
      <div className="container">
        <h2 className={s.health_title}>{t("health.healthTitle")}</h2>
        <div className={s.content_wrapper}>
          <div className={s.content_block}>
            <p className={s.health_text}>{t("health.healthDescr")}</p>
            <Link href="" className={s.product_link}>
              {t("health.link")}
            </Link>
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
              {/* <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/2bM-wnAj1To?cookies=0"
                title="YouTube video player"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-popups"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                className={s.video}
              /> */}
              <VideoComponent className={s.video} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
