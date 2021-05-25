import styled from "styled-components";
import Product from "./Product";

const GridView = ({ products }: { products: any }) => {
  console.log(products);
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
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  .xy {
    padding-top: 10rem;
  }
`;
export default GridView;
