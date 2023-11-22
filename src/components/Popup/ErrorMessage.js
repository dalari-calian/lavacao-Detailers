import React, { useState, useEffect } from 'react';
import style from './ErrorMessage.module.css';
import { ReactComponent as Close } from "../../assets/img/close-bold.svg";

export function ErrorMessage({ message, onClick }) {
  const [showProgressBar, setShowProgressBar] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgressBar(false);
    }, 3000);

    setIsVisible(!!message);

    return () => clearTimeout(timer);
  }, [message]);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsVisible(false);
    
    setTimeout(() => {
      onClick();
    }, 500);
  };

  return (
    <div className={`${style.errorMessage} ${isVisible ? style.show : style.hide}`}>
      {showProgressBar && <ProgressBar />}
      <p>{message}</p>
      <button className={style.button} onClick={handleButtonClick}>
        <Close/>
      </button>
    </div>
  );
}

function ProgressBar() {
  return <div className={style.progressBar}></div>;
}
