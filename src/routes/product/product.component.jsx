import { Fragment, useContext } from 'react';
import './product.styles.scss';
import { useParams } from 'react-router';
import { ProductsContext } from '../../contexts/products.context';
import { useState } from 'react';
import { useEffect } from 'react';
import ProductCard from '../../components/product-card/product-card.component';


const Product = () => {
    const { product } = useParams();
    const { productsMap } = useContext(ProductsContext);
    const [categories, setCategories] = useState(productsMap[product]);
    console.log(productsMap);
    useEffect(()=>{
        setCategories(productsMap[product]);
    }, [productsMap, product]);

    return (
        <Fragment>
            <h2 className='product-title'>{product.toUpperCase()}</h2>
            <div className='product-container'>
                {categories &&
                    categories.map((product) => (
                        <ProductCard key={product.id}  product={product}></ProductCard>
                    ))
                }
            </div>
        </Fragment>
    )

}

export default Product;