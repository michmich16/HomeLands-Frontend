import { InputBox } from "../components/InputBox/InputBox";
import { useContext, useState } from "react";
import { SectionHeader } from "../components/SectionHeader/SectionHeader";
import { UserContext } from "../context/UserContext";
import { Administrator } from "../components/Administrator/Administrator";
import { MarginContainer } from "../components/MarginContainer/MarginContainer";
import s from "./pageStyles/LoginPage.module.scss";

export const LoginPage = () => {
    const [email, setEmail] = useState(""); //gemmer input i email
    const [password, setPassword] = useState(""); //gemmer input i password
    const [error, setError] = useState(""); // sætter error besked i error
    const [loginMessage, setLoginMessage] = useState(""); // sætter login besked i loginmessage
    const { userToken, setUserData, setUserToken } = useContext(UserContext); //userToken=nuværende user's authentucation token, hvis userToken er der så betyder at user er logget ind
    //setUserData gemmer user data i context såsom, access token, name, created, expires_in osv.
    // setUserToken gemmer user authentication i context

    //submit username og password med en post request til API, burger URLSearchParams til at construct en body.
    function submitData() {
        const body = new URLSearchParams();
        body.append("username", email); //henter email fra email usestate
        body.append("password", password); //henter password fra email usestate

        const options = {
            method: "POST", //post method
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
                {userToken ? ( //turnary operator, hvis userToker er der så vis Admininstator component ellers vis login form med InputBox
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
