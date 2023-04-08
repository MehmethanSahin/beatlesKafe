import styles from "./Advertise.module.css";
import { Link } from "react-scroll";

function Campaign() {
  return (
    <div className={styles["campaign-container"]}>
      <div className={styles["campaign-image"]}></div>
      <div className={styles["campaign-text"]}>
        <h2>Özel Günlerinizde de Yanınızdayız!</h2>
        <p>Doğum günü organizasyonları için bize ulaşın.</p>
        <button>
          <Link to="Contact" offset={300} className={styles.button}>
            İletişim Detayları
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Campaign;
