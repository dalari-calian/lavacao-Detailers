import styles from "./HomePage.module.css";
import { NavBar } from "../components/Bar/NavBar";
import { SideBar } from "../components/Bar/SideBar";

export function CarPage() {
  
  return (
    <div className={ styles.containerPage }>
      <div className={ styles.containerNav }>
        <NavBar></NavBar>
      </div>
      <div className={ styles.containerSide }>
        <SideBar></SideBar>
      </div>
    </div>
  );
}
