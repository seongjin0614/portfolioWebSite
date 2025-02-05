import styles from './Hero.module.css';
import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        '안녕하세요. 프론트엔드 개발자 서성진입니다.\n\n제가 생각하는 \'좋은 개발자\'란 함께 일하고 싶은 동료입니다.\n저는 항상 그런 개발자가 되고자 노력합니다.\n\n포트폴리오를 방문해주셔서 감사합니다.'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 500,
      showCursor: true,
      cursorChar: '|',
      loop: true,
      loopCount: Infinity,
      whitespace: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.typingContainer}>
        <div className={styles.staticText}>
          <span className={styles.function}>function</span>{" "}
          <span className={styles.name}>introduction</span>
          <span className={styles.bracket}>() {"{"}
          </span>
        </div>
        <div className={styles.dynamicText}>
          "<span ref={el}></span>"
        </div>
        <div className={styles.closingBrace}> {" };"}</div>
      </div>
    </section>
  );
} 