import { PageHero } from "../components";
import styled from "styled-components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <div>
      <PageHero title="about" />
      <Wrapper className="page section-center">
        <img src={aboutImg} alt="comfy sofa" />
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 4em;
  margin-top: 5rem;
  margin-bottom: 5rem;
  img {
    display: none;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    img {
      border-radius: var(--radius);
      width: 100%;
      min-height: 400px;
      display: inline-block;
    }
  }
`;
export default AboutPage;
