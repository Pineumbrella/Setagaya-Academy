import styles from "./Access.module.css";

export function Access() {
  return (
    <section className={styles.access} aria-label="アクセス">
      <span className={styles.icon}>〒</span>
      <div>
        <p>梅ヶ丘駅から</p>
        <strong>徒歩2分</strong>
      </div>
    </section>
  );
}
