import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            About Me
          </h2>
          <p className={styles.subtitle}>
            Developer passionate about technology and innovation
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.story}>
            <h3 className={styles.storyTitle}>
              My Story
            </h3>
            <div className={styles.storyText}>
              <p>
                I'm a Full Stack Developer with experience in modern technologies
                like <span className="code-text">React</span>, <span className="code-text">Next.js</span>, <span className="code-text">Node.js</span>, and <span className="code-text">TypeScript</span>. My passion is creating
                web applications that not only work well but also provide
                an exceptional user experience.
              </p>
              <p>
                With a background in software development and practical experience
                in various projects, I always seek to learn new technologies and
                improve my skills to deliver increasingly efficient and innovative solutions.
              </p>
              <p>
                I believe technology should be accessible and useful for everyone,
                which is why I dedicate myself to creating intuitive interfaces and
                robust applications that solve real problems.
              </p>
            </div>
          </div>

          <div className={styles.skillsCard}>
            <h4 className={styles.skillsTitle}>
              What I Do
            </h4>
            <div className={styles.skillsList}>
              <div className={styles.skillItem}>
                <div className={`${styles.skillDot} ${styles.skillDotBlue}`}></div>
                <span className={styles.skillText}>Frontend Development with React/Next.js</span>
              </div>
              <div className={styles.skillItem}>
                <div className={`${styles.skillDot} ${styles.skillDotPurple}`}></div>
                <span className={styles.skillText}>Backend Development with Node.js</span>
              </div>
              <div className={styles.skillItem}>
                <div className={`${styles.skillDot} ${styles.skillDotGreen}`}></div>
                <span className={styles.skillText}>Responsive Interface Design</span>
              </div>
              <div className={styles.skillItem}>
                <div className={`${styles.skillDot} ${styles.skillDotOrange}`}></div>
                <span className={styles.skillText}>API and Database Integration</span>
              </div>
              <div className={styles.skillItem}>
                <div className={`${styles.skillDot} ${styles.skillDotRed}`}></div>
                <span className={styles.skillText}>Performance Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
