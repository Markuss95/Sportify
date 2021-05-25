import styled from "styled-components";
import { PageHero, Sort, ProductList, Filters } from "../components";

const ProductsPage = () => {
  return (
    <div>
      <PageHero title={"products"} />
      <Wrapper className="section-center">
        <div>
          <Filters />
        </div>
        <div>
          <Sort />
          <ProductList />
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-template-columns: 1fr 5fr;
  gap: 2rem;
  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export default ProductsPage;
