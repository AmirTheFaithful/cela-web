import styles from "./message-card.module.scss";

export const MessageCard = ({ content }: { content: string }) => {
  return (
    <div className={styles.messageCardContainer}>
      <div className={styles.messageCard}>
        <p className={styles.textContent}>{content}</p>
      </div>
    </div>
  );
};
