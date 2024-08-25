import styles from "./Home.module.css";
import Layout from "../../components/Layout/Layout";

function Home() {
    return (
        <Layout>
            <div className={styles.pHome}>
                <p>Home</p>
            </div>
        </Layout>
    )
}

export default Home;