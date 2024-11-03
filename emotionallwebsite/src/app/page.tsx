import styles from "./page.module.css";
import Home from "./components/Home";

export default function EmotionallWebSite() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}
