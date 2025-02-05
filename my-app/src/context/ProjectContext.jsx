import { createContext, useContext } from 'react';
import vemoImage from '../assets/project/vemo.png';
import pintosImage from '../assets/project/pintos.png';
import portfolioImage from '../assets/project/portfolio.png';

const ProjectContext = createContext();

export const projects = [
  {
    id: 1,
    title: "VEMO",
    description: "영상에 직접 기록하여 나만의 기록을 만들어보세요",
    thumbnail: vemoImage,
    skills: ["React", "Next.js", "TypeScript", "Vercel"],
    github: "https://github.com/username/vemo",
    demo: "https://vemo.com",
    details: {
      overview: "유튜브 영상을 학습하면서 메모를 작성하고, 기록과 영상을 타임라인으로 매핑하여 효율적인 학습 관리를 지원하는 서비스입니다. 분산되어 있던 영상, 메모, 캡처 자료를 하나의 타임라인으로 통합해 효율적인 학습 관리를 지원하며, AI 기반 영상 요약 기능으로 신속하게 학습 내용을 파악하고, 자동 생성되는 퀴즈를 통해 복습하며 부족한 점을 점검하고 보완할 수 있습니다.",
      features: [
        "작성하기: YouTube Player와 메모 기능 연동, 타임스탬프 생성, 자동 저장 및 실시간 동기화",
        "캡처하기: 크롬 확장 프로그램을 통한 YouTube Player 캡처, AWS S3 업로드 방식으로 데이터 처리",
        "그리기: 캡처된 이미지에 그리기 기능 추가, 이미지와 그리기 데이터 결합",
        "추출하기: 이미지 기반 텍스트 추출, 추출된 텍스트 활용 기능",
        "요약하기: Context 기반 전역 관리, AI 기반 영상 요약 및 퀴즈 생성"
      ],
      implementation: [
        "React와 Next.js를 사용한 프론트엔드 개발",
        "TypeScript를 활용한 타입 안정성 확보",
        "Vercel을 통한 자동 배포 환경 구축",
        "크롬 확장 프로그램 개발 및 배포",
        "GitHub와 Vercel 연동을 통한 CI/CD 환경 구축"
      ]
    }
  },
  // ... PintOS와 Portfolio 프로젝트 데이터도 동일한 형식으로 추가
];

export function ProjectProvider({ children }) {
  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
}

export function useProjects() {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjects must be used within a ProjectProvider');
  }
  return context;
} 