import React from "react";
import styles from "./banner.module.css";

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <img
        src="https://www.light-sources.com/wp-content/uploads/2020/07/iStock-898906302-hospital.jpg"
        alt="Banner Image"
        className={styles.image}
      />
      <div className={styles.textContainer}>
        <h1>Vaccine Service Center</h1>
        <p>Providing safe and effective vaccines for all.</p>
      </div>
    </div>
  );
};

export default Banner;
