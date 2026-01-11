import styles from "./home.module.scss";

import { Hero } from "./elements/Hero";

export const HomePage = () => {
  return (
    <main className={styles.home}>
      <Hero />
    </main>
  );
};
