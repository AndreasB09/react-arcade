import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown.jsx";

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleDropdown = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo} onClick={toggleDropdown}></div>
            <div className={styles.btnContainer}>
                <Link to="/">
                    <button className={styles.navBtn}>Home</button>
                </Link>
                <Link to="/games">
                    <button className={styles.navBtn}>Games</button>
                </Link>
                <Link to="/shop">
                    <button className={styles.navBtn}>Shop</button>
                </Link>
            </div>

            {menuVisible && (
                <Dropdown onClose={toggleDropdown}>
                    <ul>
                        <li>Settings</li>
                        <li>Profile</li>
                        <li>Logout</li>
                        <li>Exit</li>
                    </ul>
                </Dropdown>
            )}
        </header>
    )
}

export default Header;