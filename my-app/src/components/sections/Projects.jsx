import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import vemoImage from '../../assets/project/vemo.png';
import pintosImage from '../../assets/project/pintos.png';
import portfolioImage from '../../assets/project/portfolio.png';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "VEMO",
      description: "영상에 직접 기록하여 나만의 기록을 만들어보세요",
      thumbnail: vemoImage,
      skills: ["React", "Next.js", "TypeScript", "Vercel"],
      github: "https://github.com/username/vemo",
      demo: "https://vemo.com"
    },
    {
      id: 2,
      title: "PintOS",
      description: "운영체제의 핵심 기능을 구현한 교육용 운영체제 프로젝트",
      thumbnail: pintosImage,
      skills: ["C", "OS", "Data Structure", "Git"],
      github: "https://github.com/username/pintos",
      demo: "https://pintos-doc.com"
    },
    {
      id: 3,
      title: "Portfolio",
      description: "React와 다양한 라이브러리를 활용한 포트폴리오 웹사이트",
      thumbnail: portfolioImage,
      skills: ["React", "CSS Module", "Fullpage.js"],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio.com"
    }
  ];

  const handleCardClick = (project) => {
    window.open(project.demo, '_blank');
  };

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleCardClick(project)}
          />
        ))}
      </div>
    </section>
  );
} 