import CtegoryPreview from '../components/preview-category/CtegoryPreview'
import { useSelector } from 'react-redux';
import { selectCategories } from '../redux/selectors/categoriesSelector';

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

