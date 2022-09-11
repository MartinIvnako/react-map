import { useContext, useEffect, useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import FormInput from "../form-input/form-input.component";
import { ShopContext } from "../../context/shops.context";
import { isStringsMatch, isStringsMatchInArray } from "../../utils/help/isMatch";
import { IShop, IShopInfo } from "../../utils/types/shops.types";

const NavigationSearch = () => {
    const [searchText, setSearchText] = useState("");
    const { shops } = useContext(ShopContext);
    const [filteredShops, setFilteredShops] = useState<IShop[] | []>([]);

    const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchText(value);
    };

    useEffect(() => {
         const result = shops.filter(({title, field_shop_tags_export}) =>
             isStringsMatch(title, searchText)
             || isStringsMatchInArray(field_shop_tags_export, searchText) 
        ); 
        setFilteredShops(result);
           
    }, [searchText, shops]);    

    console.log("filteredShops", filteredShops)

    return (
        <div className="">
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
            <ul>
                {filteredShops.length > 0 && filteredShops.map((shop) => (
                    <li key={shop.title}>
                        <div className="">
                        <div className="">
                            <img src={"https://www.galerie-butovice.cz/" + shop.field_shop_logo} alt="" />
                        </div>
                        <div className="">  
                            <div className="" >{shop.title}</div>
                            <div className="" >Floor: {shop.field_floor}</div>
                        </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavigationSearch;
