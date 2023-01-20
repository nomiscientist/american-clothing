import {
    createContext,
    useEffect,
    useState
} from "react";

import PRODUCTS from '../shop-data.js';
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    products: {},
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const getProductMap = async () => {
            const productMap = await getCollectionAndDocuments('products');
            setProducts(productMap)
        }
        getProductMap();

    }, []);

    // useEffect(()=>{
    //     addCollectionAndDocuments('products', PRODUCTS);
    // }, []);


    const value = { products };
    return (
        <ProductsContext.Provider value={value} >
            {children}
        </ProductsContext.Provider>
    )
}