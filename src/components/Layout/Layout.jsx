import Header from "../Header/Header";
import styles from "./Layout.module.css";
import PropTypes from "prop-types";
import Quickbar from "../Quickbar/Quickbar";

const Layout = ({ children }) => {
    return (
      <div className={styles.layout}>
        <Header />
        <Quickbar />
        {children}
      </div>
    );
  };

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;