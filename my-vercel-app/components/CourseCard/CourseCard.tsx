import type { Course } from "@/data/courses";
import styles from "./CourseCard.module.css";

type CourseCardProps = {
  course: Course;
};

export function CourseCard({ course }: CourseCardProps) {
  return (
    <article className={styles.card}>
      <div>
        <p className={styles.lead}>{course.lead}</p>
        <h3>{course.title}</h3>
      </div>
      <ul>
        {course.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
