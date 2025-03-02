import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const GetContext = createContext();

export function GetContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL

    fetch(`${apiUrl}/allproducts`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filterCategoryName = (categoryName) => {
    switch (categoryName) {
      case "Camisetas":
        return "Camiseta";
      case "Regatas":
        return "Regata";
      case "Calcoes":
        return "Calção";
      case "Acessorios":
        return "Acessório";
      default:
        return;
    }
  };

  const formatCategoryName = (categoryName) => {
    switch (categoryName) {
      case "Camisetas":
        return "Camisetas";
      case "Regatas":
        return "Regatas";
      case "Calcoes":
        return "Calções";
      case "Acessorios":
        return "Acessórios";
      default:
        return;
    }
  };

  return (
    <GetContext.Provider
      value={{
        products,
        selectedProduct,
        setSelectedProduct,
        filterCategoryName,
        formatCategoryName,
      }}
    >
      {children}
    </GetContext.Provider>
  );
}

GetContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
