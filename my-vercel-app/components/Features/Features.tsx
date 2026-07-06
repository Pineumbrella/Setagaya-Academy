import { features } from "@/data/features";
import { FeatureCard } from "@/components/FeatureCard/FeatureCard";
import styles from "./Features.module.css";

export function Features() {
  return (
    <section id="features" className={styles.features} aria-labelledby="features-title">
      <p className={styles.kicker}>Features</p>
      <h2 id="features-title">特徴</h2>
      <div className={styles.list}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}
