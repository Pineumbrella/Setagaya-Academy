import styles from "./CTA.module.css";

type CTAProps = {
  variant: "filled" | "outline";
};

export function CTA({ variant }: CTAProps) {
  const isFilled = variant === "filled";
  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScbEdggvICku0mK532ZYfmffv9BLul_5T3XQLla7jTJMKIoug/viewform?usp=header";

  return (
    <section id={isFilled ? "contact" : undefined} className={styles.cta}>
      <p>{isFilled ? "まずは学習のお悩みをお聞かせください" : "授業までの流れが気になる方はこちら"}</p>
      <a
        className={isFilled ? styles.filled : styles.outline}
        href={formUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        お問い合わせはこちら
      </a>
    </section>
  );
}
