import React, { useState, useEffect } from "react";
import styles from "./LoginError.module.css";
import { ReactComponent as Close } from "../../assets/img/close-bold.svg";

export function LoginError({ error, onClick }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(!!error);
  }, [error]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsVisible(false); // Define isVisible como false para iniciar o fade-out
    
    // Aguarde o tempo da transição (500ms) antes de chamar onClick
    setTimeout(() => {
      onClick();
    }, 500);
  };

  return (
    <div
      className={`${styles.containerErro} ${isVisible ? styles.show : styles.hide}`}
    >
      <p>{error}</p>
      <button className={styles.btClose} onClick={handleButtonClick}>
        <Close className={styles.button} />
      </button>
    </div>
  );
}
