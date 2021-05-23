import styled from "styled-components";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
const Stars = ({ stars, reviews }: { stars: number; reviews: number }) => {
  return (
    <Wrapper>
      <div className="stars">
        <span>
          {stars >= 1 ? (
            <BsStarFill />
          ) : stars >= 0.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {stars >= 2 ? (
            <BsStarFill />
          ) : stars >= 1.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {stars >= 3 ? (
            <BsStarFill />
          ) : stars >= 2.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {stars >= 4 ? (
            <BsStarFill />
          ) : stars >= 3.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
        <span>
          {stars >= 5 ? (
            <BsStarFill />
          ) : stars >= 4.5 ? (
            <BsStarHalf />
          ) : (
            <BsStar />
          )}
        </span>
      </div>
      <p className="reviews"> ({reviews} customer reviews)</p>
    </Wrapper>
  );
};

export default Stars;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  .reviews {
    padding-left: 2rem;
  }
  span {
    svg {
      color: #ffa651;
    }
  }
`;
