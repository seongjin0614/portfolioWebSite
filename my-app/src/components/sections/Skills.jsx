import styles from './Skills.module.css';
import { frontendIcons, toolIcons } from '../../constants/skillIcons';

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillBox}>
          <h3>Frontend</h3>
          <div className={styles.iconGrid}>
            {frontendIcons.map((icon, index) => (
              <div key={index} className={styles.iconWrapper}>
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillBox}>
          <h3>Tools</h3>
          <div className={styles.iconGrid}>
            {toolIcons.map((icon, index) => (
              <div key={index} className={styles.iconWrapper}>
                <img src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 