import styled from "styled-components";

const CommingSoonPage = () => {
  return (
    <Wrapper className="section  text-center page-100">
      <h2>This page is still under construction</h2>
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
export default CommingSoonPage;
