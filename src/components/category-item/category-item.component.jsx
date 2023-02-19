import {
  BackgroundImage,
  Body,
  CategoryContainer
} from './category-item.styles.jsx';

const CategoryItem = (props) => {
    const category = props.category;
    return (
        <CategoryContainer>
          <BackgroundImage imageUrl={category.imageUrl} ></BackgroundImage>
          <Body to={`shop/${category.title}`}>
            <h1>{category.title.toUpperCase()}</h1>
            <p>Shop Now</p>
          </Body> 
        </CategoryContainer>
    )
};

export default CategoryItem;