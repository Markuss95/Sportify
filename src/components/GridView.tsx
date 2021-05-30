import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }: { products: any }) => {
  return (
    <Wrapper>
      {products.map((product: any) => {
        return <Product key={product.id} {...product} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  margin-top: 1.5rem;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  .xy {
    padding-top: 10rem;
  }
  @media (max-width: 500px) {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
`;
export default GridView;
