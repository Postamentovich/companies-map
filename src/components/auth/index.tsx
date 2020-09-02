import React, { useState, useEffect, useCallback } from "react";
import "./index.scss";

export const Auth: React.FC = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const checkPassword = useCallback(() => {
        if (password === process.env.REACT_APP_PASSWORD) {
            setIsAuth(true);
            setPassword("");
            setError("");
        } else {
            setError("Incorrect password");
        }
    }, [password]);

    useEffect(() => {
        const listener = (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                checkPassword();
            }
        };
        window.addEventListener("keypress", listener);
        return () => {
            window.removeEventListener("keypress", listener);
        };
    }, [checkPassword]);

    if (isAuth) return <>{children}</>;

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError("");
        setPassword(e.target.value);
    };

    return (
        <div className="auth">
            <img src={"logo.png"} className="auth__logo" alt="logo"></img>
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
