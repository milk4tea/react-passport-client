import React, { useContext } from 'react'
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { myContext } from '../Context';

export default function NavBar() {
    const userObject = useContext(myContext);
    const logout = () => {
        axios.get("https://milk4tea-oauth.herokuapp.com/auth/logout", { 
            withCredentials: true}
            ).then(res => {
                if (res.data === "done") {
                    window.location.href = "/"
                }
        })
    }
    return(
        <div className={styles.navBarWrapper}>
            <ul className={styles.navBar}>
                <li><Link to="/">Home</Link></li>

                {
                    userObject ? (
                        <li onClick={logout}>Logout</li>
                    )
                    : (
                        <li><Link to="/login">Login</Link></li>
                    )
                }
            </ul>
        </div>
    )
}