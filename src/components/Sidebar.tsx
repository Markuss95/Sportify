import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaTimes } from "react-icons/fa";
import { links } from "../utlis/constants";
import { CartButtons } from "./index";
import { useProductsProvider } from "../context/products_context";
const Sidebar = () => {
  const isOpen = true;
  const data = useProductsProvider();

  return (
    <SidebarContainer>
      <div className={`${isOpen ? "sidebar sidebar-show" : "sidebar"}`}>
        <div className="sidebar-header">
          <Link to="/">
            <img src={logo} alt="Sportify" />
          </Link>
          <button type="button" className="sidebar-close">
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map(({ id, text, url }) => {
            return (
              <li key={id}>
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
          <li>
            {" "}
            <Link to="/">Checkout</Link>
          </li>
        </ul>
        <div className="button-container">
          <CartButtons />
        </div>
      </div>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  .sidebar-header {
    padding-left: 2rem;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: -2.5rem;
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: all 0.3s linear;
    transform: translate(-100%);
  }
  .sidebar-show {
    transform: translate(0);
  }
  .sidebar-close {
    position: relative;
    font-size: 2rem;
    color: var(--clr-red-dark);
    cursor: pointer;
    background: transparent;
    border: transparent;
    right: 2rem;
    transition: var(--transition);
  }
  .sidebar-close:hover {
    color: var(--clr-red-light);
  }
  .links {
    position: relative;
    width: 100vw;
    top: -4rem;
    padding-left: 2rem;
  }

  .links a {
    display: block;
    font-size: 1rem;
    text-transform: capitalize;
    color: var(--clr-grey-3);
    padding: 1rem 1.8rem;
    letter-spacing: var(--spacing);
    transition: var(--transition);
  }
  // css property of CartButtons import
  .cart-value {
    position: relative;
    top: -1.5rem;
  }
  .links a:hover {
    background: var(--clr-grey-10);
    padding: 1rem 3rem;
  }
  .button-container {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    div {
      margin-left: 0;
    }
  }

  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
`;

export default Sidebar;
