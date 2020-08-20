import React, { useState } from "react";
import "./index.scss";

export const Auth: React.FC = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    if (isAuth) return <>{children}</>;

    const checkPassword = () => {
        if (password === process.env.REACT_APP_PASSWORD) {
            setIsAuth(true);
            setPassword("");
            setError("");
        } else {
            setError("Incorrect password");
        }
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <div className="auth">
            <div className="auth__popup">
                <label htmlFor="password" className="auth__label">
                    Enter password
                </label>
                <input
                    type="password"
                    id="password"
                    className="auth__password"
                    autoFocus
                    value={password}
                    onChange={onChange}
                />
                {error && <span className="auth__error">{error}</span>}
                <button onClick={checkPassword} type="button" className="auth__button">
                    Login
                </button>
            </div>
        </div>
    );
};
