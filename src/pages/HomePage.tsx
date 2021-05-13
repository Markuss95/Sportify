import styled from "styled-components";
import { Hero, Services, Contact } from "../components";
const HomePage = () => {
  return (
    <Wrapper>
      <Hero />
      <Services />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.main``;

export default HomePage;
