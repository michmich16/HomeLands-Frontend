import { NavLink } from "react-router-dom";
import s from './Navbar.module.scss';
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";


export const Navbar = () => {

    const [searchWord, setSearchWord] = useState('')
    console.log('searchWord', searchWord)

    return (
        <>
            <nav className={s.navStyle}>
                <ul>
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/estates'}>Boliger til salg</NavLink></li>
                    <li><NavLink to={'/login'}>Login</NavLink></li>
                    <li><input type='search'
                        variant='standard'
                        name='search'
                        id='search-field'
                        value={searchWord}
                        onChange={(event) => setSearchWord(event.target.value)} placeholder="Indtast søgeord" />
                        <NavLink to={searchWord ? `/search/${searchWord}` : `/estates`}> <FaSearch /> </NavLink></li>
                </ul>

            </nav>
        </>
    )
}