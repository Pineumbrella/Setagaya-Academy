import type { Feature } from "@/data/features";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </article>
  );
}
