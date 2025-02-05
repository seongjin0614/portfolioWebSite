import { useState } from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../ProjectCard/ProjectCard';
import ProjectModal from '../ProjectModal/ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "React와 다양한 라이브러리를 활용한 포트폴리오 웹사이트",
      thumbnail: "/images/portfolio-thumb.png",
      skills: ["React", "CSS Module", "Fullpage.js"],
      github: "https://github.com/username/portfolio",
      demo: "https://portfolio.com",
      details: {
        overview: "개인 포트폴리오 웹사이트 제작 프로젝트",
        features: [
          "Fullpage.js를 활용한 섹션 단위 스크롤",
          "반응형 디자인 구현",
          "CSS Module을 활용한 스타일링"
        ],
        implementation: [
          "React와 Fullpage.js 연동",
          "컴포넌트 기반 아키텍처 설계",
          "모듈화된 CSS 관리"
        ]
      }
    },
    // 다른 프로젝트들 추가...
  ];

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
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
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
} 