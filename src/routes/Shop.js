import { Route, Routes } from "react-router-dom";
import "./ShopStyle.scss";
import CategoriesPreview from './CategoriesPreview'
import Category from "./Category";

const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/> 
      <Route path=':category' element={<Category/>}/> 
    </Routes>
  )
}

export default Shop;


/* <Fragment key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="products-container">
            {categoriesMap[category].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment> */