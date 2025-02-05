import styles from './About.module.css';
import photo from '../../assets/photo.jpg';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <h2>About Me</h2>
        <div className={styles.aboutSection}>
          <h3>"저는 빠르게 배우고 지속적으로 성장하는 개발자입니다."</h3>
          <span>크래프톤 정글에 참여했을 당시, 같은 기수 중 가장 적은 개발 지식을 가지고 시작했습니다. 하지만 빠른 이해력과 적응력을 바탕으로 OS, 네트워크, 자료구조, 알고리즘 등 컴퓨터 공학(CS) 기초 지식을 체계적으로 익히며 성장하며, 도움을 받는 입장에서 도움을 주는 역할로 변화할 수 있었습니다. <br /><br />
            단순히 학습에 그치지 않고, 그 근본적인 원리와 이론을 빠르게 이해하며 성장했습니다. 이러한 성장을 통해 동료들에게 인정받아, 7명만 선발되는 팀장으로 뽑혀, 효율적인 팀워크와 체계적인 일정 관리로 프로젝트를 성공적으로 이끌었습니다.
            <br /><br />
            새로운 환경과 기술을 배우는 데 두려움이 없으며, 효율적으로 학습하고 빠르게 적응하는 방법을 체득했습니다. 이 경험은 앞으로도 도전적인 상황 속에서 지속적으로 성장하는 개발자로서의 기반이 되었습니다.</span>
        </div>
        <div className={styles.aboutSection}>
          <h3>"저는 에스프레소를 내리는 개발자입니다."</h3>
          <span>
            3년간 개인 카페를 운영하며, 고객의 요구를 빠르게 파악하고 최적의 해결책을 제안하는 능력을 키웠습니다. 다양한 고객과의 소통을 통해 **효율적인 커뮤니케이션의 중요성을 배우며, 이를 기반으로 협업 능력을 강화할 수 있었습니다.
            <br /><br />
            사업의 모든 과정을 책임지고 관리하며, 문제를 주도적으로 해결하고 실행으로 옮기는 역량을 키웠습니다. 이 과정에서 목표를 설정하고 끝까지 책임지는 자세를 몸에 익혔고, 빠르게 결정을 내리고 문제를 해결하는 데 익숙해졌습니다.
            <br /><br />
            개발자로 전환한 이후, 이러한 경험은 팀원들과의 원활한 소통과 협업을 통해 문제를 해결하고, 프로젝트 목표를 달성하는 데 큰 자산이 되었습니다. 프로젝트 진행 중에는 각자의 의견을 조율하며 생산적인 결과를 도출했고, 맡은 역할에 책임감과 실행력을 발휘해 팀의 성과를 높이는 데 기여할 수 있었습니다.
          </span>
        </div>
      </div>

      <div className={styles.profile}>
        <div className={styles.idCard}>
          <div className={styles.companyName}>PROFILE</div>
          <img
            src={photo}
            alt="profile"
            className={styles.profileImage}
          />
          <div className={styles.idCardContent}>
            <div className={styles.profileInfo}>
              <div className={styles.name}>서성진</div>
              <div className={styles.position}>Frontend Developer</div>
              <div className={styles.details}>
                <div>tjtjdwls0614@gmail.com</div>
              </div>
            </div>
          </div>
          <div className={styles.bigLetter}>SW</div>
        </div>
      </div>
    </section>
  );
} 