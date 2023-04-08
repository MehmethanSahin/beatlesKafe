import React, { useState } from "react";
import styles from "./Hero.module.css";
import { Link } from "react-scroll";

function Hero() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const getClassName = () => {
    if (selectedImageIndex === 0) {
      return `${styles.hero} bg-success text-white`;
    } else if (selectedImageIndex === 1) {
      return `${styles.hero} bg-dark text-white`;
    } else if (selectedImageIndex === 2) {
      return `${styles.hero} bg-warning text-white`;
    } else if (selectedImageIndex === 3) {
      return `${styles.hero} bg-danger text-white`;
    } else {
      return styles.hero;
    }
  };

  return (
    <div className={getClassName()} id="Hero">
      <h1 className={styles.title}>
        {selectedImageIndex === 0 && "Vegan Menülerimizle"}
        {selectedImageIndex === 1 && "Sıcak ve Soğuk İçeceklerimizle"}
        {selectedImageIndex === 2 && "Geniş Fast Food Çeşitlerimizle"}
        {selectedImageIndex === 3 && "Özel Tatlılarımızla"}
        {selectedImageIndex === null && "Beatles Kafe"}
      </h1>
      <p className={styles.subtitle}>Lezzeti ve Tazeliği Keşfet</p>
      <Link to="Menu" offset={-215} className={styles.button}>
        Menüyü Görüntüle
      </Link>

      <div className={styles.images}>
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/22476/salad-clipart-xl.png"
          alt="Image 1"
          onClick={() => handleImageClick(0)}
        />
        <img
          src="https://png.pngtree.com/png-clipart/20221225/ourmid/pngtree-coffee-ice-drink-in-transparent-plastic-container-illustration-png-image_6537237.png"
          alt="Image 2"
          onClick={() => handleImageClick(1)}
        />
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/26884/fast-food-menu-sample-usage-clipart-sm.png"
          alt="Image 3"
          onClick={() => handleImageClick(2)}
        />
        <img
          src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/59625/cake-graphics-clipart-sm.png"
          alt="Image 4"
          onClick={() => handleImageClick(3)}
        />
      </div>
    </div>
  );
}

export default Hero;
