import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import {
    Preview,
    ProductPreviewContainer,
    Title

} from './product-preview.styles.jsx';

const ProductPreview = ({ title, products }) => {

    return (
        <ProductPreviewContainer>
            <h2>
                <Title to={title}>{title.toUpperCase()}</Title>
            </h2>
            <Preview>
                {products
                    .filter((_, idx) => idx < 4)
                    .map((product) => (
                        <ProductCard key={product.id} product={product} ></ProductCard>
                    ))
                }
            </Preview>
        </ProductPreviewContainer>
    )
}

export default ProductPreview;