import React from "react";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.wrapper}>
      <p>
        This project is from{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://joyofreact.com">
          The Joy of React
        </a>
        , a comprehensive React.js course.
      </p>
      <p>Just Practicing React</p>
    </footer>
  );
}

export default Footer;
