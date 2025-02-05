import styles from './Laptop.module.css';
import laptopImage from '../../assets/appleimac.png';

export default function Laptop() {
  return (
    <div className={styles.laptopWrapper}>
      <img src={laptopImage} alt="laptop" className={styles.laptop} />
    </div>
  );
} 