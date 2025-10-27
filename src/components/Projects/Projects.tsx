import { projects } from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            My Projects
          </h2>
          <p className={styles.subtitle}>
            Some of the projects I developed to showcase my skills
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={styles.card}
            >
              <div className={styles.imageContainer}>
                <span className={styles.imagePlaceholder}>
                  {project.name.charAt(0)}
                </span>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>
                  {project.name}
                </h3>
                <p className={styles.description}>
                  {project.description}
                </p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={styles.techTag}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.links}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.link} ${styles.linkGreen}`}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
