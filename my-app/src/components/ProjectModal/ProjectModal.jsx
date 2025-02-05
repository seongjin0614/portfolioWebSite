import styles from './ProjectModal.module.css';

export default function ProjectModal({ project, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <div className={styles.modalContent}>
          <h2>{project.title}</h2>
          <img
            src={project.thumbnail}
            alt={project.title}
            className={styles.modalImage}
          />
          <div className={styles.details}>
            <section>
              <h3>Overview</h3>
              <p>{project.details.overview}</p>
            </section>
            <section>
              <h3>Key Features</h3>
              <ul>
                {project.details.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
            <section>
              <h3>Implementation</h3>
              <ul>
                {project.details.implementation.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>
            <div className={styles.links}>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 