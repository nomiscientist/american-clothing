import {
    createContext,
    useEffect,
    useState
} from "react";

import PRODUCTS from '../shop-data.js';
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    productsMap: {},
})

export const ProductsProvider = ({ children }) => {
    const [productsMap, setProductsMap] = useState({});

    useEffect(() => {
        const getProductMap = async () => {
            const productMap = await getCollectionAndDocuments('products');
            setProductsMap(productMap)
        }
        getProductMap();

    }, []);

    // useEffect(()=>{
    //     addCollectionAndDocuments('products', PRODUCTS);
    // }, []);


    const value = { productsMap };
    return (
        <ProductsContext.Provider value={value} >
            {children}
        </ProductsContext.Provider>
    )
}