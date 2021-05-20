import { useProductsProvider } from "../context/products_context";
import { Loading, Error } from "./index";
import styled from "styled-components";
const FeaturedProducts = () => {
  const data = useProductsProvider();
  if (data?.products_loading === true) {
    return <Loading />;
  }
  if (data?.products_error === true) {
    return <Error />;
  }

  return <Wrapper className="section"></Wrapper>;
};

const Wrapper = styled.div``;

export default FeaturedProducts;
