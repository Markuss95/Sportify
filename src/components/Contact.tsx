import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper className="section-center">
      <div className="contact-center">
        <div className="contact-page">
          <h3>Join our newsletter and get 20% off</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            obcaecati fugiat ratione neque repellendus numquam?
          </p>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="Enter Email" className="form-input" />
          <button type="submit" className="btn">
            {" "}
            Subscribe
          </button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 50vh;
  display: flex;
  align-items: center;

  .form-input {
    width: 50vw;
    height: 32px;
    padding-left: 1rem;
    color: black;
    padding-top: 0.2rem;
  }
  .form-input,
  .btn {
    border: 2px solid black;
    border-radius: var(--radius);
  }

  .form-input::placeholder {
    color: black;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    .contact-center {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
    }
    .contact-form {
      display: grid;
      max-width: 500px;
      grid-template-columns: 1fr auto;
      gap: 0;
    }
    .form-input {
      width: 20vw;
    }
  }
`;
export default Contact;
