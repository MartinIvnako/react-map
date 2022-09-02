import { useEffect, useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import Button from "./button/button.component";
import FormInput from "./form-input/form-input.component";

const Navigation = () => {
    const [searchText, setSearchText] = useState("");
    const [shops, setShops] = useState([]);

    const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchText(value);
    };

    useEffect(() => {}, []);

    return (
        <nav>
            <ul>
                <li>Výps/mapa</li>
                <li>Kategórie</li>
            </ul>
            <div>
                <FormInput
                    type="text"
                    placeholder="Hľadať podľa názvu obchodu..."
                    onChange={handleSearchText}
                    value={searchText}
                />
                {searchText}
                <div>
                    <SearchNormal1 size="32" color="#FF8A65" />
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
