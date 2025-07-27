import styles from "./preview.module.scss";

import { MessageCard } from "../../components/message-card";

const dummyMessages = ["Hi! How's it going?"];

export const PreviewPage = () => {
  return (
    <main className={styles.previewPage}>
      <MessageCard content={dummyMessages[0]} />
    </main>
  );
};
