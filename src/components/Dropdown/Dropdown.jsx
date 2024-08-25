import styles from "./Dropdown.module.css";
import PropTypes from "prop-types";

function Dropdown({ onClose, children }) {
    return (
        <div className={styles.dropdown} onClick={onClose}>
            <div className={styles.menuContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
}

Dropdown.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Dropdown;