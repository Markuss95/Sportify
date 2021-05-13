import styled from "styled-components";
import heroBcg from "../assets/foottball-ball.jpeg";
import heroBcg2 from "../assets/rsz_11hero-bcg-2.jpeg";

const Hero = () => {
  return (
    <Wrapper className="section-center">
      <div className="hero-text">
        <h2>Fuel your passion </h2>
        <p className="hero-paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa minus
          recusandae eveniet expedita veniam repudiandae velit assumenda natus
          adipisci corrupti.
        </p>
        <button type="button" className="btn">
          SHOP NOW
        </button>
      </div>
      <div className="img-container">
        <img
          src={heroBcg}
          alt="Woman with basketball"
          className="first-image"
        />
        <img src={heroBcg2} alt="Man swimming" className="second-image" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 60vh;
  display: grid;
  place-items: center;

  .hero-paragraph {
    font-size: 1.2rem;
    letter-spacing: 0.06rem;
    color: var(--clr-grey-5);
    line-height: 2.2rem;
  }
  .hero-text {
    text-align: center;
    margin: auto 0.2rem;
  }
  .img-container {
    display: none;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    grid-template-columns: 1fr 1fr;
    gap: 8rem;

    .btn {
      height: 3.2rem;
      width: 9rem;
      transition: var(--transition);
    }
    .hero-text {
      margin: auto;
      text-align: left;
      h2 {
        margin-bottom: 2rem;
      }
    }
    .img-container {
      display: block;
      position: relative;
    }
    .first-image {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
      z-index: 100;
    }
    .second-image {
      width: 100%;
      height: 550px;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .img-container::before {
      content: "";
      position: absolute;
      width: 10%;
      height: 80%;
      background: var(--clr-primary-10);
      bottom: 0%;
      left: -8%;
      border-radius: var(--radius);
    }
  }
`;
export default Hero;
