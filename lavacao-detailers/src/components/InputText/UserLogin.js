import "./styles/UserLoginStyle.css";

function UserLogin() {
    return (
        <div>
              <input 
                type="text"
                id="idLogin"
                name="idLogin"
                placeholder="Usuário"
                className="inputLogin" 
                ></input>
        </div>
    );
}
  
export default UserLogin;