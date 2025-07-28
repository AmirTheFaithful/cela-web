import styles from "./message-card.module.scss";

export const MessageCard = ({ content }: { content: string }) => {
  return (
    <div className={styles.messageCardContainer}>
      <div className={styles.messageCard}>
        <p className={styles.textContent}>{content}</p>
        <div className={styles.meta}>
          <time className={styles.date}>09:37</time>
        </div>
      </div>
    </div>
  );
};
