import styled from "styled-components";

const ErrorPage = () => {
  return (
    <Wrapper className="page-100">
      <h3>Error page</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-primary-6);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default ErrorPage;
