import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} aria-labelledby="about-title">
      <p className={styles.kicker}>Setagaya Academy</p>
      <h2 id="about-title">世田谷アカデミーについて</h2>
      <p>
        世田谷アカデミーは、梅ヶ丘エリアに根ざした少人数・個別指導の学習塾です。
        学校の授業フォローから受験対策まで、生徒ごとの目標と生活リズムに合わせて学習計画を作ります。
      </p>
    </section>
  );
}
