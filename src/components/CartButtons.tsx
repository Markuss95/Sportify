import styled from "styled-components";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useProductsProvider } from "../context/products_context";
const CartButtons = () => {
  const data = useProductsProvider();
  return (
    <Wrapper>
      <Link to="/" onClick={data?.closeSidebar}>
        Cart
        <span className="cart-icon">
          <FaShoppingCart />
        </span>
        <span className="cart-value">12</span>
      </Link>
      <Link to="/" className="login-block">
        Login
        <span className="login-icon">
          <FaUserPlus />
        </span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-left: 25rem;
  font-size: 1.5rem;
  margin-right: 1.8rem;

  a {
    color: var(--clr-grey-1);
  }
  .cart-icon {
    margin-left: 0.3rem;
  }
  .login-block {
    margin-left: 2rem;
  }
  .login-icon {
    margin-left: 0.3rem;
  }
  .cart-value {
    position: absolute;
    color: white;
    font-size: 0.75rem;
    border-radius: 50%;
    background: var(--clr-orange);
    padding: 0.3rem;
    top: -0.8rem;
  }
`;
export default CartButtons;
