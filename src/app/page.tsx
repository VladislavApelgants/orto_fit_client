import { Categories } from "@/components/services/main/Categories/Categories";
import { Hero } from "@/components/services/main/Hero/Hero";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.page}>
      <Hero />
      <Categories />
    </main>
  );
}
