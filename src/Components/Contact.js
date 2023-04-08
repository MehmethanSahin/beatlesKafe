import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactSection} id="Contact">
      <h2>İletişim</h2>
      <ul>
        <li>
          <FaMapMarkerAlt />
          <span>Abbey Road sokak, No:19, İstanbul</span>
        </li>
        <li>
          <FaPhone />
          <span>+90 (123) 456 7890</span>
        </li>
        <li>
          <FaEnvelope />
          <span>mehmethansahin@outlook.com.tr</span>
        </li>
      </ul>
      <div className={styles.socialMediaIcons}>
        <a
          href="https://www.facebook.com/thebeatles/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/thebeatles/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/thebeatles?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Contact;
