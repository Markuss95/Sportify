import styled from "styled-components";
import { services } from "../utlis/constants";

const Services = () => {
  return (
    <Wrapper>
      <article className="section-center">
        <div className="header-center">
          <h3>
            sport equipement <br /> designed for you
          </h3>
          <p className="header-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            quidem doloremque nemo exercitationem esse voluptatibus tempore
            provident quo dolores facere.
          </p>{" "}
        </div>
        <div className="services-center">
          {services.map(({ id, icon, title, text }) => {
            return (
              <div key={id} className="service-card">
                <span>{icon}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            );
          })}
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-primary-10);

  h3 {
    line-height: 2rem;
    color: var(--clr-grey-2);
  }
  .header-paragraph {
    color: var(--clr-grey-2);
  }
  .header-center {
    padding: 4rem 0 4rem 0;
  }
  .services-center {
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    padding-bottom: 2rem;
  }
  .service-card {
    background: var(--clr-primary-7);
    padding: 2rem;
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  span {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    border-radius: 50%;
    background: White;
    svg {
      color: var(--clr-orange);
      font-size: 2.1rem;
    }
  }
  @media (min-width: 992px) {
    .header-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1280px) {
    .services-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
