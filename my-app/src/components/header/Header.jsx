import styles from './header.module.css'
import { Link } from 'react-router-dom';

// src/assets/icons 폴더에서 import
import notionIcon from '../../assets/icons/notion.svg';
import githubIcon from '../../assets/icons/github.svg';
import tstoryIcon from '../../assets/icons/tstory.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import portfolioLogo from '../../assets/icons/portfolioLogo.svg';

export default function Header() {
  return (
    <div className={styles.header}>

      <div>
        <Link to="/">
          <h1 className={styles.portfolioButton}>
            <img
              className={styles.portfolioLogo}
              src={portfolioLogo} alt="portfolio" />
          </h1>
        </Link>
      </div>

      <div className={styles.buttonContainer}>
        <a href="https://trusted-swoop-4bd.notion.site/1851752f24d780e5b9e4dff56d13651a">
          <button><img src={notionIcon} alt="notion" /></button>
        </a>
        <a href="https://github.com/seongjin0614">
          <button><img src={githubIcon} alt="github" /></button>
        </a>
        <a href="https://malsookkim.tistory.com/">
          <button><img src={tstoryIcon} alt="tstory" /></button>
        </a>
        <a href="https://www.instagram.com/_hahahoho___/">
          <button><img src={instagramIcon} alt="instagram" /></button>
        </a>
      </div>

    </div>
  );
}
