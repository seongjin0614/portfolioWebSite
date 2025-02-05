import styles from './SectionNav.module.css';

export default function SectionNav({ currentSection, fullpageApi }) {
  const sections = [
    { id: 'intro', label: 'Intro', index: 0 },
    { id: 'about', label: 'About Me', index: 1 },
    { id: 'skills', label: 'Skills', index: 2 },
    { id: 'projects', label: 'Projects', index: 3 }
  ];

  const handleClick = (index) => {
    if (fullpageApi) {
      fullpageApi.moveTo(index + 1);  // 자연스러운 이동을 위해 moveTo 사용
    }
  };

  return (
    <nav className={styles.sectionNav}>
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={`${styles.navItem} ${currentSection === section.id ? styles.active : ''}`}
            onClick={() => handleClick(section.index)}
          >
            <span className={styles.dot}></span>
            <span className={styles.label}>{section.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
} 