import { useContext } from "react";
import { CategoriesContext } from "../contexts/categories.context";
import CtegoryPreview from '../components/preview-category/CtegoryPreview'

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

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