import ReactFullpage from '@fullpage/react-fullpage';
import styles from './Home.module.css';
import { useState } from 'react';
import LaptopAnimation from '../../components/laptopAnimation/LaptopAnimation';
import Hero from '../../components/sections/Hero';
import About from '../../components/sections/About';
import Skills from '../../components/sections/Skills';
import Projects from '../../components/sections/Projects';
import SectionNav from '../../components/SectionNav/SectionNav';

import githubIcon from '../../assets/icons/github.svg';
import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.png';
import jsIcon from '../../assets/icons/js.png';
import reactIcon from '../../assets/icons/react.png';
import tsIcon from '../../assets/icons/ts.png';
import nextIcon from '../../assets/icons/next.png';
import slackIcon from '../../assets/icons/slack.svg';
import figmaIcon from '../../assets/icons/figma.svg';
import notionIcon from '../../assets/icons/notion.svg';
import photo from '../../assets/photo.jpg';

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [currentSection, setCurrentSection] = useState('intro');
  const [fullpageApi, setFullpageApi] = useState(null);

  return (
    <div className={styles.container}>
      {!animationComplete ? (
        <LaptopAnimation onComplete={() => setAnimationComplete(true)} />
      ) : (
        <div className={styles.fullpageWrapper}>
          <SectionNav
            currentSection={currentSection}
            fullpageApi={fullpageApi}
          />
          <ReactFullpage
            scrollingSpeed={1000}
            navigation={false}
            autoScrolling={true}
            fitToSection={true}
            anchors={['intro', 'about', 'skills', 'projects']}
            onLeave={(origin, destination) => {
              setCurrentSection(destination.anchor);
            }}
            render={({ fullpageApi: api }) => {
              if (!fullpageApi) {
                setFullpageApi(api);
              }
              return (
                <ReactFullpage.Wrapper>
                  <div className="section">
                    <Hero />
                  </div>
                  <div className="section">
                    <About />
                  </div>
                  <div className="section">
                    <Skills />
                  </div>
                  <div className="section">
                    <Projects />
                  </div>
                </ReactFullpage.Wrapper>
              );
            }}
          />
        </div>
      )}
    </div>
  );
}
