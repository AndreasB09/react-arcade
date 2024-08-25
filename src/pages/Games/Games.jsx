import styles from "./Games.module.css";
import Layout from "../../components/Layout/Layout";

function Games() {
    return (
        <Layout>
            <div className={styles.pGames}>
                <p>Games</p>
            </div>
        </Layout>
    )
}

export default Games;