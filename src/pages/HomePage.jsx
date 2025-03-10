import { useEffect, useState } from "react";
import fullpage from "fullpage.js";
import "fullpage.js/dist/fullpage.min.css";

import './HomePage.css';

import IntroSection from "../sections/IntroSection";
import AboutMe from "../sections/AboutMe";
import Skills from '../sections/Skills';
import VscNav from "../components/VscNav"; // VS Code 스타일 네비게이션 추가

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // ✅ fullpage.js 초기화
    if (!window.fullpage_api) {
      window.fullpage_api = new fullpage("#fullpage", {
        autoScrolling: true,
        navigation: true,
        anchors: ["intro", "about", "skills"],
        onLeave: function (origin, destination) {
          setActiveSection(destination.index);
        }
      });
    }

    return () => {
      // ✅ 언마운트될 때 fullpage.js 제거 (중복 실행 방지)
      if (window.fullpage_api) {
        window.fullpage_api.destroy("all");
        delete window.fullpage_api;
      }
    };
  }, []);

  const scrollToSection = (index) => {
    if (window.fullpage_api) {
      window.fullpage_api.moveTo(index + 1);
    }
  };

  return (
    <div className="homepage">
      {/* ✅ VS Code 스타일 네비게이션 추가 */}
      <VscNav activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* ✅ fullpage.js가 적용되는 컨테이너 */}
      <div id="fullpage">
        <div className="section"><IntroSection /></div>
        <div className="section"><AboutMe /></div>
        <div className="section"><Skills /></div>
      </div>
    </div>
  );
};
