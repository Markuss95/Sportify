import { useProductsProvider } from "../context/products_context";
import { Loading, Error, Product } from "./index";
import styled from "styled-components";
const FeaturedProducts = () => {
  const data = useProductsProvider();
  const featured = data?.featured_products;
  if (data?.products_loading === true) {
    return <Loading />;
  }
  if (data?.products_error === true) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center">
        {featured?.map((product, index) => {
          // I want to see only first 3 items marked as "featured"
          if (index < 3) {
            console.log(product);
            return <Product key={product.id} {...product} />;
          }
        })}
      </div>
      <div className="btn">ALL PRODUCTS</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-grey-10);
  display: flex;
  flex-direction: column;
  align-items: center;
  .section-center {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .btn {
    margin-top: 2rem;
    display: inline;
  }
`;

export default FeaturedProducts;
