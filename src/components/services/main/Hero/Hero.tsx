import Link from "next/link";
import { JSX } from "react";
import s from "./hero.module.scss";

export const Hero = (): JSX.Element => {
  return (
    <section className={s.hero_section}>
      <div className="container">
        <div className={s.info_block}>
          <p className={s.subtitle}>Say Hello to ToyStore!</p>
          <h1 className={s.hero_title}>Free Ecommerce Template for Webflow</h1>
          <Link href="/catalog" className={s.hero_link}>
            Open catalog
          </Link>
        </div>
      </div>
    </section>
  );
};
