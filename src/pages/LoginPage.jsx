import { InputBox } from "../components/InputBox/InputBox";
import { useContext, useState } from "react";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { UserContext } from "../context/UserContext";
import { Administrator } from "../components/Administrator/Administrator";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import s from "./pageStyles/LoginPage.module.scss";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loginMessage, setLoginMessage] = useState("");
    const { userToken, setUserData, setUserToken } = useContext(UserContext);

    function submitData() {
        const body = new URLSearchParams();
        body.append("username", email);
        body.append("password", password);

        const options = {
            method: "POST",
            body: body,
        };

        fetch("https://api.mediehuset.net/token", options)
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    setUserData(data); // Save user data
                    setUserToken(data.access_token); // Save the token
                    setLoginMessage("Du er nu logget ind");
                    setError(""); // Clear any previous error
                } else {
                    setLoginMessage("Forkert brugernavn eller password");
                }
            })
            .catch(() => {
                setError("Noget gik galt, prøv igen senere");
                setLoginMessage(""); // Clear any previous message
            });
    }

    return (
        <>
        <MarginContainer>
            {userToken ? (
                <Administrator />
            ) : (
                <div className={s.loginDiv}>
                        <SectionHeader
                            title="Login"
                            text="Indtast dit brugernavn og adgangskode for at logge ind"
                        />
                    <form>
                        <InputBox
                            type="email"
                            placeholder="Brugernavn"
                            name="Email"
                            id="emailField"
                            action={setEmail}
                        />
                        <InputBox
                            type="password"
                            placeholder="Adgangskode"
                            name="Password"
                            id="passwordField"
                            action={setPassword}
                        />
                    </form>
                    <button className={s.loginBtnStyle} onClick={submitData}>
                        LOGIN
                    </button>
                    {error && <p className={s.errorMessage}>{error}</p>}
                    {loginMessage && <p className={s.loginMessage}>{loginMessage}</p>}
                </div>
            )}
            </MarginContainer>
        </>
    );
};
