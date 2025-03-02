import { useEffect, useState, useContext } from "react";
import { ProductCard } from "./ProductCard";
import { GetContext } from "../context/getContext";
import PropTypes from 'prop-types';

export const GridProducts = ({ categoryName }) => {
  const { products, filterCategoryName } = useContext(GetContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL

    const filteredCategoryName = filterCategoryName(categoryName);
    fetch(`${apiUrl}/products/type/${filteredCategoryName}`)
      .then((response) => response.json())
      .then((data) => setFilteredProducts(data));
  }, [categoryName, products, filterCategoryName]);

  return (
    <div className="col-12 col-md-9">
      <div className="row">
        {filteredProducts.map((product, index) => (
          <div className="col-6 col-lg-4" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

GridProducts.propTypes = {
  categoryName: PropTypes.string.isRequired,
};
