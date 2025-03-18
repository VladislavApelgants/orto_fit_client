import { Categories } from "@/components/services/main/Categories/Categories";
import { Hero } from "@/components/services/main/Hero/Hero";
import { OurAdvantages } from "@/components/services/main/OurAdvantages/OurAdvantages";
import { TopProducts } from "@/components/services/main/TopProducts/TopProducts";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <Categories />
      <OurAdvantages />
      <TopProducts title="Wooden Toys" contentFlag="toys" />
      <TopProducts title="Stuffed Toys" contentFlag="fit" />
    </main>
  );
}
