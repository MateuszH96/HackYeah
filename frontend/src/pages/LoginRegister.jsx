import { useState } from "react";

function LoginRegister() {
    const [loginForm, setLoginForm] = useState(true);

    const generateInputs = () => {
        return (
            <div>
                {loginForm ? (
                    <div className="login-container">
                    <h1>Zaloguj się</h1>
                    <br/>
                    <div className="zaloguj">                        
                        <div>
                            <label className="Login">Login:</label>
                            <input type="text"  className="input-field"/>
                        </div>
                        <div>
                            <label className="Haslo">Hasło:</label>
                            <input type="password" className="input-field"/>
                        </div>
                    </div>
                    </div>
                ) : (
                    <div className="zarejestruj-container">
                        <h1>Zarejestruj sie</h1>
                        <br/>
                    <div className="zarejestruj">
                        <div>
                            <label className="Login">Login:</label>
                            <input type="text" className="input-field" />
                        </div>
                        <div>
                            <label className="Email">Email:</label>
                            <input type="email" className="input-field"/>
                        </div>
                        <div>
                            <label className="Haslo">Hasło:</label>
                            <input type="password" className="input-field" />
                        </div>
                        <div>
                            <label className="Haslo">Powtórz hasło:</label>
                            <input type="password" className="input-field" />
                        </div>
                    </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            <button className="przelacz"onClick={() => setLoginForm(!loginForm)}>
                {loginForm ? "Zarejestruj się" : "Zaloguj się"}
            </button>
            {generateInputs()}
            <div className="but-container">
            <button className="login-button">
                {loginForm ? "Zaloguj" : "Zarejestruj"}
            </button>
            </div>
        </div>
    );
}

export default LoginRegister;
