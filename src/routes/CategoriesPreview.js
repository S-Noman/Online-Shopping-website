import CtegoryPreview from '../components/preview-category/CtegoryPreview'
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/selectors/selectors';

const CategoriesPreview = () => {

  const categoriesMap = useSelector(selectCategories)

  return (
    <div className='category-preview-container'>
      {Object.keys(categoriesMap).map((category) => {
        const products = categoriesMap[category];
        return (
        <CtegoryPreview key={category} category={category} products={products} />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;


/* <Fragment key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="products-container">
            {categoriesMap[category].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment> */