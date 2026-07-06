import { flows } from "@/data/flows";
import styles from "./Flow.module.css";

export function Flow() {
  return (
    <section id="flow" className={styles.flow} aria-labelledby="flow-title">
      <p className={styles.kicker}>Flow</p>
      <h2 id="flow-title">初回授業までの流れ</h2>
      <ol className={styles.steps}>
        {flows.map((flow) => (
          <li key={flow.id} className={styles.step}>
            <span>{flow.step}</span>
            <div>
              <h3>{flow.title}</h3>
              <p>{flow.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
