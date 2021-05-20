import styled from "styled-components";
import { Hero, Services, Contact, FeaturedProducts } from "../components";
const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default HomePage;
