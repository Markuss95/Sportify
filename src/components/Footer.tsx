import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <h5>
        &copy; {new Date().getFullYear()}{" "}
        <span className="brand-title">SPORTIFY</span> All rights reserved
      </h5>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  margin-top: 2rem;
  z-index: 999;
  color: white;
  background: var(--clr-black);
  .brand-title {
    color: var(--clr-orange);
  }
`;
export default Footer;
