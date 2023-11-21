import React, { useState, useEffect } from 'react';
import style from './ErrorMessage.module.css';

export function ErrorMessage({ message }) {
  const [showProgressBar, setShowProgressBar] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProgressBar(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={style.errorMessage}>
      {showProgressBar && <ProgressBar />}
      <p>{message}</p>
    </div>
  );
}

function ProgressBar() {
  return <div className={style.progressBar}></div>;
}
