import { useContext, useEffect, useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import FormInput from "./form-input/form-input.component";
import { ShopContext } from "../context/shops.context";
import { isStringsMatch } from "../utils/help/isMatch";
import { IShop } from "../utils/types/shops.types";

const Navigation = () => {
    const [searchText, setSearchText] = useState("");
    const { shops } = useContext(ShopContext);
    const [filteredShops, setFilteredShops] = useState<IShop[] | []>([]);

    const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchText(value);
    };

    useEffect(() => {
         const result = shops.filter((shop) =>
           isStringsMatch(shop.title, searchText) 
        ); 
        setFilteredShops(result);
           
    }, [searchText, shops]);    

    console.log("filteredShops", filteredShops)

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
