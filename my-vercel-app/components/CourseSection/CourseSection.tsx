import { CourseCard } from "@/components/CourseCard/CourseCard";
import { courses } from "@/data/courses";
import styles from "./CourseSection.module.css";

export function CourseSection() {
  return (
    <section id="courses" className={styles.courses} aria-labelledby="courses-title">
      <p className={styles.kicker}>Courses</p>
      <h2 id="courses-title">コース紹介</h2>
      <div className={styles.list}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
