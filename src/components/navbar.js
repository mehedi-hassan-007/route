import React from 'react';
import { Link } from 'react-router-dom';
import style from "./navbar.module.css";

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <Link className={style.navLink} to="/">Home</Link><br/>
            <Link className={style.navLink} to="/Contact">Contact</Link><br/>
            <Link className={style.navLink} to="/Blog">Blog</Link><br/>
        </nav>
    );
};

export default Navbar;