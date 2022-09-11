import { ReactNode, useState, createContext } from "react";
import SHOP_LIST from '../data/shops.data.json';

export const ShopContext = createContext({
    shops: SHOP_LIST
});

export const ShopProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [shops] = useState(SHOP_LIST);

    const value = { shops };
    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
