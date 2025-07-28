import styles from "./preview.module.scss";

import { MessageCard } from "../../components/message-card";

// Hard-coded and dummy values are temporary.
const dummyMessages = ["Hi! How's it going?"];

export const PreviewPage = () => {
  return (
    <main className={styles.previewPage}>
      <MessageCard
        content={dummyMessages[0]}
        status="read"
        date={new Date()}
        colors={["#ffcc99", "#a3d2ca", "#7e7dc9", "#faacea"]}
      />
    </main>
  );
};
