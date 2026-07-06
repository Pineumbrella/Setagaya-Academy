import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>世田谷アカデミー</p>
      <nav aria-label="フッターナビゲーション">
        <a href="#features">特徴</a>
        <a href="#courses">コース紹介</a>
        <a href="#flow">初回授業までの流れ</a>
        <a href="#access">教室の場所</a>
      </nav>
      <small>&copy; Setagaya Academy</small>
    </footer>
  );
}
