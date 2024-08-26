import styles from "./Quickbar.module.css";

function Quickbar() {
    return (
        <div className={styles.quickbar}>
            <h4>Favorites</h4>
            <div className={styles.favIcon}></div>
            <div className={styles.favIcon}></div>
            <div className={styles.favIcon}></div>
        </div>
    )
}

export default Quickbar;