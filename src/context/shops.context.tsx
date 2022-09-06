import { ReactNode, useState, createContext } from "react";
import SHOPS from "../data/shops.data.json";

export const ShopContext = createContext({
    shops: [{}],
});

export const ShopProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [shops] = useState(SHOPS);

    console.log("typeof SHOPS", typeof SHOPS);

    const value = { shops };

    return (
        <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
    );
};
