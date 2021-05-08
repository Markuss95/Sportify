import styled from "styled-components";
import { Link } from "react-router-dom";
const CartButtons = () => {
  return (
    <Wrapper>
      <Link to="/">Cart</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default CartButtons;
