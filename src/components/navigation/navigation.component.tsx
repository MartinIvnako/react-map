import NavigationSearch from "./navigation-search.component";
import styles from "./navigation.module.scss"

const Navigation = () => {

    return (
        <nav className={styles.navigation}>
            <ul className={styles.navigationList}>
                <li className={styles.navigationItem}>Výps/mapa</li>
                <li>Kategórie</li>
            </ul>
            <NavigationSearch/>
        </nav>
    );
};

export default Navigation;
