import NavigationSearch from "./navigation-search.component";

const Navigation = () => {

    return (
        <nav>
            <ul>
                <li>Výps/mapa</li>
                <li>Kategórie</li>
            </ul>
            <NavigationSearch/>
        </nav>
    );
};

export default Navigation;
