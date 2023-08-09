import "../styles/LoginPage.css";
import BtLogin from "../components/Buttons/BtLogin";
import UserLogin from "../components/InputText/UserLogin";
import UserPassword from "../components/InputText/UserPassword";

function LoginPage() {
  return (
    <div className="containerPage">
        <div className="containerLogin">
            <UserLogin className="inputLogin"/>
            <UserPassword className="inputSenha"/>
            <BtLogin className="btLogin"/>
        </div>
    </div>
  );
}

export default LoginPage;
