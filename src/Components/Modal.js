import React from 'react';
import styles from './Modal.module.css';

function Modal(props) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalCard}>
        <img src={"https://images.pexels.com/photos/4161223/pexels-photo-4161223.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="" className={styles.modalImage} />
        <div className={styles.priceContainer}>
          <p className={styles.modalPrice}>{props.price} 12₺</p>
        </div>
        <div className={styles.modalContent}>
          <p className={styles.modalDescription}>{props.description}</p>
        </div>
        <button className={styles.closeButton} onClick={props.onClose}>
          X
        </button>
      </div>
    </div>
  );
}

export default Modal;
