import s from './Header.module.scss';
import { Navbar } from '../Navbar/Navbar';

export const Header = () => {
    return (
        <>
            <header className={s.headerStyle}>
                <div className={s.logo}>
                    <h2>HomeLands</h2>
                </div>
                <Navbar />
            </header>
        </>
    )
}