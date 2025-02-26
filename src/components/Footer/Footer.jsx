import s from './Footer.module.scss';
import { FaSquareTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

export const Footer = () => {

    return (
        <>
            <footer className={s.footerStyle}>
                <div className={s.leftFooterStyle}>
                    <h3>HomeLands</h3>
                    <span>
                        <p>Øster Uttrupvej 5</p>
                        <p>9000 Aalborg</p>
                    </span>
                    <span>
                        <p>Email: info@homelands.dk</p>
                        <p>Telefon: +45 1122 3344</p>
                    </span>
                </div>
                <div className={s.rightFooterStyle}>
                    <FaSquareTwitter />
                    <FaFacebookSquare />

                </div>
            </footer>
        </>
    )
}