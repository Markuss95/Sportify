import styled from "styled-components";
import { Link } from "react-router-dom";
const PageHero = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/"> Home</Link> / {title} {subtitle && `/ ${subtitle}`}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: var(--clr-primary-10);
  color: var(--clr-primary-3);
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  color: var(--clr-primary-1);
  a {
    color: var(--clr-orange);
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`;

export default PageHero;
