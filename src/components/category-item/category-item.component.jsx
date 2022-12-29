
import './category-item.styles.scss';

const CategoryItem = (props) => {
    const category = props.category;
    return (
        <div className="category-container" key={category.id}>
          <div className="background-image" style={
            {backgroundImage: `url(${category.imageUrl})`}
          }></div>
          <div className="category-body-container">
            <h1>{category.title}</h1>
            <p>Shop Now</p>
          </div>
        </div>
    )
};

export default CategoryItem;