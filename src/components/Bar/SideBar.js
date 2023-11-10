import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./SideBar.module.css";
import { ReactComponent as HomeIcon } from "../../assets/icon/homeIcon.svg";
import { ReactComponent as ClientIcon } from "../../assets/icon/clientIcon.svg";
import { ReactComponent as CarIcon } from "../../assets/icon/carIcon.svg";
import { ReactComponent as ToolsIcon } from "../../assets/icon/toolsIcon.svg";

export function SideBar() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Atualizar a cada 1 segundo

    // Lembre-se de limpar o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  const isHomePage = location.pathname === "/homepage"
  const isClientePage = location.pathname === "/clientpage"
  const isCarPage = location.pathname === "/carpage"
  const isToolsPage = location.pathname === "/toolspage"

  return (
    <div className={styles.containerSide}>
      <div className={styles.containerIcons}>
        <HomeIcon 
          className={`${styles.icon} ${isHomePage ? styles.activeIcon : styles.notActiveIcon}`}
          onClick={() => navigate("/homepage")}
        />
        <ClientIcon 
          className={`${styles.icon} ${isClientePage ? styles.activeIcon : styles.notActiveIcon}`}
          onClick={() => navigate("/clientpage")}
        />
        <CarIcon 
          className={`${styles.icon} ${isCarPage ? styles.activeIcon : styles.notActiveIcon}`}
          onClick={() => navigate("/carpage")}
        />
        <ToolsIcon 
          className={`${styles.icon} ${isToolsPage ? styles.activeIcon : styles.notActiveIcon}`}
          onClick={() => navigate("/toolspage")}
        />
      </div>
      <div className={styles.containerClock}>
        <p>{formattedTime}</p>
      </div>
    </div>
  );
}
