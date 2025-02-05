import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img
        src={project.thumbnail}
        alt={project.title}
        className={styles.thumbnail}
      />
      <div className={styles.content}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className={styles.skills}>
          {project.skills.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 