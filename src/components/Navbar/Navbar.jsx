import { NavLink } from "react-router-dom";
import s from './Navbar.module.scss';
import { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [searchWord, setSearchWord] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className={s.navStyle}>
                <div className={s.navHeader}>
                    <button className={s.burgerButton} onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
                <ul className={`${s.navLinks} ${isMenuOpen ? s.showMenu : ''}`}>
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/estates'}>Boliger til salg</NavLink></li>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li className={s.searchBar}>
                        <input 
                            type='search'
                            name='search'
                            id='search-field'
                            value={searchWord}
                            onChange={(event) => setSearchWord(event.target.value)} 
                            placeholder="Indtast søgeord" 
                        />
                        <NavLink to={searchWord ? `/search/${searchWord}` : `/estates`}> 
                            <FaSearch /> 
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};
