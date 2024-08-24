import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}></div>
            <div className={styles.btnContainer}>
                <Link to="/">
                    <button className={styles.navbtn}>Home</button>
                </Link>
                <Link to="games">
                    <button className={styles.navbtn}>Games</button>
                </Link>
                <Link to="shop">
                    <button className={styles.navbtn}>Shop</button>
                </Link>
            </div>
        </header>
    )
}

export default Header;