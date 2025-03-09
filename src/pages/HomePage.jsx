import IntroSection from "../sections/IntroSection";

import fullpage from "fullpage.js"
import "fullpage.js/dist/fullpage.min.css"

import {useEffect} from "react";

export default function HomePage() {

  // 풀페이지
  useEffect(() => {
    new fullpage("#fullpage", {
      autoScrolling: true,
      navigation: true,
      anchors: ["firstPage", "secondPage", "thirdPage"]
    });
  }, []);

  return (

    // fullpage를 적용하려는 태그의 id를 "fullpage"로 할당 해야함
    // section은 className이 "section"로 할당 해야함
    <div id="fullpage">
      <IntroSection className="section"/>
      <div className="section">섹션 1</div>
      <div className="section">섹션 2</div>
      <div>섹션 3</div>
    </div>
  )
};
