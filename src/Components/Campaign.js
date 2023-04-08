import React, { useState } from "react";
import styles from "./Campaign.module.css";
import Modal from "./Modal";

function Campaign() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  const closeModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles["campaign-container"]}>
      <div className={styles["campaign-image"]}></div>
      <div className={styles["campaign-text"]}>
        <h2>Yeni Ürünümüzü Denediniz mi?</h2>
        <p>Yumuşak Yapısıyla Norveç keki'ni denemelisiniz.</p>
        <button onClick={openModalHandler}>Kampanya Detayları</button>
      </div>
      {isModalOpen && (
        <Modal
          description="Norveç keki, yumuşak dokusu ve lezzetli tadıyla kahveniz veya çayınızın yanına harika bir seçenek olabilir. Şimdi deneyin!"
          onClose={closeModalHandler}
        />
      )}
    </div>
  );
}

export default Campaign;
