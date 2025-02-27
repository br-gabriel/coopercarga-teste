import { useParams } from "react-router-dom";
import { CategoryHeader } from "../components/CategoryHeader";
import { AsideFilter } from "../components/AsideFilter";
import { GridProducts } from "../components/GridProducts";
import { useContext } from "react";
import { GetContext } from "../context/getContext";


export const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useContext(GetContext);

  return (
    <>
      <CategoryHeader categoryName={category} />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <AsideFilter products={products} />
          </div>
          <GridProducts categoryName={category} />
        </div>
      </div>
    </>
  );
};
