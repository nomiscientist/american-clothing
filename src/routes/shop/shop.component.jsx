import './shop.styles.scss';
import { Route, Routes } from 'react-router';
import ProductsPreview from '../products-preview/products-preview.component';
import Product from '../product/product.component';

const Shop = () => {
    return (
        <Routes>
            <Route index element={<ProductsPreview/>} ></Route>
            <Route path=':product' element={<Product/>} ></Route>
        </Routes>
    )
}

export default Shop;