import Image from "next/image";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.media} aria-hidden="true">
        <Image
          src="https://storage.stock.studio.design/optimized/2iJc0JKlL6NUcXBcDQfb-.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 560px, (min-width: 768px) 768px, 430px"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.badge}>梅ヶ丘駅から徒歩2分</p>
        <h1>世田谷アカデミー</h1>
        <p className={styles.lead}>
          一人ひとりの目標に合わせて、基礎固めから受験対策まで寄り添う個別指導塾です。
        </p>
        <a className={styles.button} href="#contact">
          無料相談を予約する
        </a>
      </div>
    </section>
  );
}
