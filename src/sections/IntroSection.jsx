import ProfileCard from "../components/ProfileCard";
import Header from "../components/Header";

import './IntroSection.css'

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function IntroSection({className}) {

  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        "✅ 제가 생각하는 ‘좋은 개발자’란 함께 일하고 싶은 동료입니다. <br> ✅ 코드 리뷰와 기술 토론을 통해 함께 성장하는 문화를 중요하게 생각합니다. <br> ✅ 단순한 개발을 넘어 비즈니스적 관점에서 아이디어를 제시하는 '서비스 중심 개발자'를 목표로 합니다."
      ],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 500,
      backDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return ()=> {
      typed.destroy();
    };
  }, []);


  return (
    <div className={className}>
      <div className="introSection">
        <div className="typedWrapper">
          <div className="fixedTyped">
            <span className="function">function</span>
            <span className="functionName"> FrontendDeveloper</span>
            <span className="parentheses">()</span>
            <span className="curlyBraces">{"{"}</span>
          </div>

          <div>
            <span
              className="typedContent"
              ref={textRef} />
          </div>

          <div className="underFixedTyped">
            <span className="curlyBraces">{"}"}</span>
          </div>
        </div>

        <div className="profileContainer">
          <ProfileCard />
        </div>
      </div>
    </div>
  )
}
