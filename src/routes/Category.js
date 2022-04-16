import React, { useEffect, useState } from "react";
import "./Category.scss";
import { useParams } from "react-router-dom";
import ProductCard from "../components/product-card/ProductCard";
import { useSelector } from "react-redux";
import { selectCategories } from '../redux/selectors/selectors';


const Category = () => {

  const categoriesMap = useSelector(selectCategories)

  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
