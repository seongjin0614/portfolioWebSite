import Lottie from "lottie-react";
import laptopAnimation from "../../assets/laptop.json"; // JSON 파일 import
import { useEffect } from "react";
import styles from './LaptopAnimation.module.css';

export default function LaptopAnimation({ onComplete }) {
  useEffect(() => {
    // 애니메이션 완료 시점에 onComplete 호출
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // 애니메이션 지속 시간에 맞게 조정

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={styles.animationContainer}>
      <Lottie
        animationData={laptopAnimation}
        loop={false}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
