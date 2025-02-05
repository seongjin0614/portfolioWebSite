import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../../context/ProjectContext';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { projects } = useProjects();

  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectDetail}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        Back to Home
      </button>
      <header className={styles.header}>
        <h1>{project.title}</h1>
        <div className={styles.skills}>
          {project.skills.map((skill, index) => (
            <span key={index} className={styles.skill}>{skill}</span>
          ))}
        </div>
      </header>

      <img
        src={project.thumbnail}
        alt={project.title}
        className={styles.projectImage}
      />

      <section className={styles.overview}>
        <h2>Overview</h2>
        <p>{project.details.overview}</p>
      </section>

      <section className={styles.features}>
        <h2>Key Features</h2>
        <ul>
          {project.details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className={styles.implementation}>
        <h2>Implementation</h2>
        <ul>
          {project.details.implementation.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <div className={styles.links}>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
        <a href={project.demo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
} 