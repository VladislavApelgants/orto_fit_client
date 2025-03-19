import { Categories } from "@/components/services/main/Categories/Categories";
import { ContactUs } from "@/components/services/main/ContactUs/ContactUs";
import { HealthInfo } from "@/components/services/main/HealthInfo/HealthInfo";
import { Hero } from "@/components/services/main/Hero/Hero";
import { OurAdvantages } from "@/components/services/main/OurAdvantages/OurAdvantages";
import { Reviews } from "@/components/services/main/Rewievs/Reviews";
import { TopProducts } from "@/components/services/main/TopProducts/TopProducts";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <ContactUs />
      <OurAdvantages />
      <Categories />
      <TopProducts title="Wooden Toys" contentFlag="toys" />
      <TopProducts title="Stuffed Toys" contentFlag="fit" />
      <HealthInfo />
      <Reviews />
    </main>
  );
}
