import { useState } from "react";

function LoginRegister() {
    const [loginForm, setLoginForm] = useState(true);

    const generateInputs = () => {
        return (
            <div>
                {loginForm ? (
                    <>
                        <div>
                            <label>Login:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Hasło:</label>
                            <input type="password" />
                        </div>
                    </>
                ) : (
                    <>
                        <div>
                            <label>Login:</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label>Hasło:</label>
                            <input type="password" />
                        </div>
                        <div>
                            <label>Powtórz hasło:</label>
                            <input type="password" />
                        </div>
                    </>
                )}
            </div>
        );
    };

    return (
        <div>
            <button onClick={() => setLoginForm(!loginForm)}>
                {loginForm ? "Przełącz na rejestrację" : "Przełącz na logowanie"}
            </button>
            {generateInputs()}
            <button>
                {loginForm ? "Zaloguj się" : "Zarejestruj się"}
            </button>
        </div>
    );
}

export default LoginRegister;
