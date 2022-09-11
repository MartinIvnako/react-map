import { useContext, useEffect, useState } from "react";
import { SearchNormal1 } from "iconsax-react";
import FormInput from "../form-input/form-input.component";
import { ShopContext } from "../../context/shops.context";
import { isStringsMatch, isStringsMatchInArray } from "../../utils/help/isMatch";
import { IShop } from "../../utils/types/shops.types";
import styles from "./navigation.module.scss"

const NavigationSearch = () => {
    const [searchText, setSearchText] = useState("");
    const { shops } = useContext(ShopContext);
    const [filteredShops, setFilteredShops] = useState<IShop[] | []>([]);

    const handleSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setSearchText(value);
    };

    useEffect(() => {
        const result :IShop[] | [] | any = shops.filter(({ title, field_shop_tags_export }) =>
             isStringsMatch(title, searchText)
             || isStringsMatchInArray(field_shop_tags_export, searchText) 
        ); 
        setFilteredShops(result);
           
    }, [searchText, shops]);    

    console.log("filteredShops", filteredShops)

    return (
        <div className={styles.search}>
            <div className={styles.searchButton}>
                <FormInput
                    type="text"
                    placeholder="Hľadať podľa názvu obchodu..."
                    onChange={handleSearchText}
                    value={searchText}
                />
               <span className={styles.searchButtonText}>{searchText}</span>
                <SearchNormal1 size="32" color="#FF8A65" className={styles.searchButtonIcon} />
            </div>
            <ul className={styles.list}>
                {filteredShops.map(({title,field_floor, field_shop_logo}) => (
                    <li key={title}>
                        <div className={styles.item}>
                            <div className={styles.image}>
                                <img src={"https://www.galerie-butovice.cz/" + field_shop_logo} alt="" />
                            </div>
                            <div className={styles.info}>  
                                <div className={styles.title} >{title}</div>
                                <div className={styles.position} >Floor: {field_floor}</div>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavigationSearch;
