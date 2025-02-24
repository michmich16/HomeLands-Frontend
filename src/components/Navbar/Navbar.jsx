import { NavLink } from "react-router-dom";
import s from './Navbar.module.scss';
import { useState, useEffect } from "react";

export const Navbar = () => {
    useEffect(() => {
        console.log("Navigation Component has Mounted");
        return () => {
            console.log("Navigation Component has Un-Mounted");
        };
    }, []);

    return (
        <>
            <nav className={s.navStyle}>
                <ul>
                    <li><NavLink to={'/'}>Forside</NavLink></li>
                    <li><NavLink to={'/'}>Boliger til salg</NavLink></li>                  
                    <li><NavLink to={'/'}>Login</NavLink></li>
                    <li><input type="text" placeholder="Indtast søgeord"/></li>
                </ul>

            </nav>
        </>
    )
}