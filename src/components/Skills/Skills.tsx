import { skills, SkillCategory } from '../../data/skills';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Technical Skills
          </h2>
          <p className={styles.subtitle}>
            Technologies and tools I use to create digital solutions
          </p>
        </div>

        <div className={styles.grid}>
          {skills.map((category: SkillCategory) => (
            <div
              key={category.name}
              className={styles.categoryCard}
            >
              <h3 className={styles.categoryTitle}>
                {category.name}
              </h3>
              <div className={styles.skillsList}>
                {category.items.map((skill: { name: string; level: number }) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <span className={styles.skillName}>{skill.name}</span>
                    <div className={styles.progressBar}>
                      <div
                        className={styles.progressFill}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
