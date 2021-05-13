import styled from "styled-components";
import { Hero, Services } from "../components";
const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <Services />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default HomePage;
