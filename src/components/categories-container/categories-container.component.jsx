import { CategoriesDiv } from './categories-container.styles.jsx';

import CategoryItem from '../category-item/category-item.component';

const CategoriesContainer = (props) => {
    const categories = props.categories;
    return (
        <CategoriesDiv>
          {categories.map((category) => (
            <CategoryItem category={category} key={category.id} />
          ))}
        </CategoriesDiv>
    );
};

export default CategoriesContainer;