import { useState } from "react";
import { PATH_LOGIN, PATH_REGISTER, PATH_USER_API, URL_SERVER } from "./API/constant";
import { useNavigate } from "react-router-dom";
import myApi from "./API/api";

function LoginRegister() {
  const [usernameForm, setLoginForm] = useState(true);
  const [username, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const generateInputs = () => {
    return (
      <div>
        {usernameForm ? (
          <>
            <div>
              <label>Login:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Hasło:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div>
              <label>Login:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setLogin(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Hasło:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Powtórz hasło:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </>
        )}
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Zatrzymaj domyślne zachowanie formularza
    if (usernameForm) {
      const data = {
        email: username,
        password: password,
      };
      try {
        const url = URL_SERVER + PATH_USER_API + PATH_LOGIN;
        const response = await myApi(url, "POST", data);
        if (response.status === 200) {
          console.log(response)
          navigate("/");
        }
      } catch (error) {
        console.error("Error during create event:", error);
      }
    } else {
      const data = {
        username: username,
        email: email,
        password1: password,
        password2: confirmPassword,
      };
      try {
        const url = URL_SERVER + PATH_USER_API + PATH_REGISTER;
        const response = await myApi(url, "POST", data);
        if (response.status === 201) {
          console.log(response)
          localStorage.setItem("accessToken",response.data.tokens.access);
          localStorage.setItem("refreshToken",response.data.tokens.refresh);
          navigate("/");
        }
      } catch (error) {
        console.error("Error during create event:", error);
      }
    }
  };

  return (
    <div>
      <button onClick={() => setLoginForm(!usernameForm)}>
        {usernameForm ? "Przełącz na rejestrację" : "Przełącz na logowanie"}
      </button>
      <form onSubmit={handleSubmit}>
        {generateInputs()}
        <button type="submit">
          {usernameForm ? "Zaloguj się" : "Zarejestruj się"}
        </button>
      </form>
    </div>
  );
}

export default LoginRegister;
