import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heroText}>Cela</h1>
      <p className={styles.heroDescription}>A modern european chatting app.</p>
    </section>
  );
};
