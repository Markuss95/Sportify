import { FaHtml5 } from "react-icons/fa";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const data = useFilterContext();
  const products = data?.filtered_products;
  const grid_view = data?.grid_view;

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Unfortunately, no product has matched your search...
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}></GridView>;
};

export default ProductList;
