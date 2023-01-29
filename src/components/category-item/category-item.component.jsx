
import { Link } from 'react-router-dom';
import './category-item.styles.scss';

const CategoryItem = (props) => {
    const category = props.category;
    return (
        <div className="category-container">
          <div className="background-image" style={
            {backgroundImage: `url(${category.imageUrl})`}
          }></div>
          <Link className="category-body-container" to={`shop/${category.title}`}>
            <h1>{category.title.toUpperCase()}</h1>
            <p>Shop Now</p>
          </Link>
        </div>
    )
};

export default CategoryItem;