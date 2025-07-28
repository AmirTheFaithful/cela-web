import styles from "./message-card.module.scss";

import CheckIcon from "../../assets/check.svg?react";
import DoubleCheckIcon from "../../assets/double-check.svg?react";

interface Props {
  content: string;
  status: "sent" | "received" | "read";
  date: Date;
  colors: string[];
}

export const MessageCard = ({ content, status, date, colors }: Props) => {
  return (
    <div
      className={styles.messageCardContainer}
      style={{
        backgroundImage: `linear-gradient(135deg, ${colors.map(
          (color) => `${color}`
        )})`,
      }}
    >
      <div className={styles.messageCard}>
        <p className={styles.textContent}>{content}</p>
        <div className={styles.meta}>
          {status === "sent" && <CheckIcon className={styles.sent} />}
          {status === "received" && (
            <DoubleCheckIcon className={styles.received} />
          )}
          {status === "read" && <DoubleCheckIcon className={styles.read} />}
          <time
            className={styles.date}
          >{`${date.getHours()}:${date.getMinutes()}`}</time>
        </div>
      </div>
    </div>
  );
};
