import "../styles/LoginPage.css";
import BtLogin from "../components/Buttons/BtLogin";
import UserLogin from "../components/InputText/UserLogin";

function LoginPage() {
  return (
    <div className="containerPage">
        <div className="containerLogin">
            <BtLogin className="btLogin"/>
        </div>
    </div>
  );
}

export default LoginPage;
