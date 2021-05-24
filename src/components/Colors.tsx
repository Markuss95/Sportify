import styled from "styled-components";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";

const Colors = ({ id, colors }: { id: string; colors: string[] }) => {
  const [mainColor, setMainColor] = useState(colors[0]);

  return (
    <Wrapper>
      <span>Colors :</span>
      <span className="colors">
        {colors.map((color, index) => {
          return (
            <button
              key={index}
              className={`color-circle `}
              style={{ background: `${color}` }}
              onClick={() => setMainColor(color)}
            >
              {mainColor === color && <FaCheck />}
            </button>
          );
        })}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .colors {
    position: absolute;
    margin-left: 2.5rem;
    svg {
      color: white;
      height: 20px;
    }
  }
  .color-circle {
    cursor: pointer;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    border-radius: 50%;
    border: none;
  }
`;
export default Colors;
