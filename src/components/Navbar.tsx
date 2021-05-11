import { links } from "../utlis/constants";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import CartButtons from "./CartButtons";
import logo from "../assets/logo.svg";
import styled from "styled-components";
import { useProductsProvider } from "../context/products_context";
const Navbar = () => {
  const data = useProductsProvider();
  return (
    <NavContainer>
      <div className="nav-header">
        <Link to="/">
          <img src={logo} alt="Sportify" />
        </Link>
        <button
          type="button"
          className="nav-toggle"
          onClick={data?.openSidebar}
        >
          <FaBars />
        </button>
      </div>
      <div className="nav-list">
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
        <CartButtons />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-header {
    height: 5rem;
    display: flex;
    width: 90vw;
    max-width: 1170px;
    justify-content: space-between;
    align-items: center;
  }
  .nav-list {
    display: none;
  }
  .nav-toggle {
    font-size: 2rem;
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-list {
      display: flex;
      position: absolute;
    }
    .nav-links {
      display: flex;
      position: relative;
      justify-content: center;
      left: 15rem;
      margin: 0 0.5rem;
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        text-transform: capitalize;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
`;

export default Navbar;
