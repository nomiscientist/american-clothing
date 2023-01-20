import { Fragment, useContext } from 'react';
import { ProductsContext } from '../../contexts/products.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {
    const { products } = useContext(ProductsContext);
    console.log(products);
    return (
        <Fragment>
            {
                Object.keys(products).map((title) => (
                    <Fragment key={title}>
                        <h2>{title}</h2>
                        <div className='products-container'>
                            {products[title].map((product) => (
                                <ProductCard key={product.id} product={product} ></ProductCard>
                            ))}
                        </div>
                    </Fragment>
                ))
            }
        </Fragment>
    )
}

export default Shop;