import { Route, Routes } from "react-router-dom";
import "./ShopStyle.scss";
import CategoriesPreview from './CategoriesPreview'
import Category from "./Category";
import {getCategoriesAndDocuments} from '../utils/firebase/firebase.utils'
import { setCategoriesMap } from "../redux/actions/actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    const getCategoriesMap = async ()=>{
        const categoryMap = await getCategoriesAndDocuments();
        dispatch(setCategoriesMap(categoryMap))
    }
    getCategoriesMap();
}, []);

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