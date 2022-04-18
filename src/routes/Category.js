import React, { useEffect, useState } from "react";
import "./Category-Style.js";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product-card/ProductCard";
import { useSelector } from "react-redux";
import { selectCategories } from '../redux/selectors/categoriesSelector';
import {CategoryContainer , CategoryTitle} from './Category-Style'


const Category = () => {

  const categoriesMap = useSelector(selectCategories)

  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;
