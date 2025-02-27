import { InputBox } from "../components/InputBox/InputBox"
import { useContext, useState } from 'react';
import { SectionHeader } from "../components/SectionHeader/SectionHeader"
import { UserContext } from "../context/UserContext"
import s from "./pageStyles/LoginPage.module.scss";

// type, placeholder, name, labelText, action, custom, id

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const { setUserData } = useContext(UserContext);

    function submitData() {
        const body = new URLSearchParams();
        body.append('username', email);
        body.append('password', password);

        const options = {
            method: "POST",
            body: body,
        };

        fetch('https://api.mediehuset.net/token', options)
            .then((res) => res.json())
            .then((data) => {
                if (data.access_token) {
                    setUserData(data);
                    setLoginMessage('Du er nu logget ind');
                    setError(''); // Clear any previous error
                } else {
                    setLoginMessage('Forkert brugernavn eller password');
                }
            })
            .catch((err) => {
                setError('Noget gik galt, prøv igen senere');
                setLoginMessage(''); // Clear any previous message
            });
    }

    return (
        <>
            <form action="">
                <SectionHeader title="Login" text="Indtast dit brugernavn og adgangskode for at logge ind" />
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
            <button className={s.loginBtnStyle} onClick={submitData}>LOGIN</button>
            {loginMessage && <p className={s.successMessage}>{loginMessage}</p>}
            {error && <p className={s.errorMessage}>{error}</p>}
        </>
    );
};
