import styled from "styled-components";
import { PageHero } from "../components";
import { useProductsProvider } from "../context/products_context";
import { useParams, Link } from "react-router-dom";

const SingleProductPage = () => {
  const data = useProductsProvider();
  const date = useParams();
  const id = Object.values(date)[0];
  const product = data?.products.find((product) => product.id === id);

  return (
    <Wrapper>
      <PageHero title="products" subtitle={product?.fields?.name} />
      <div className="section section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article``;

export default SingleProductPage;
