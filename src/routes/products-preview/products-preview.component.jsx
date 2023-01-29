import { Fragment, useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductPreview from '../../components/product-preview/product-preview.component';

const ProductsPreview = () => {

    const { productsMap } = useContext(ProductsContext);

    return (
        <Fragment>
            {Object.keys(productsMap).map((title) => {
                const products = productsMap[title];
                console.log(products);
                return (
                    <ProductPreview key={title} title={title} products={products} ></ProductPreview>
                )
            })}
        </Fragment>
    )
}

export default ProductsPreview;