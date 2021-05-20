import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({
  id,
  fields: { name, price, images },
}: {
  id: string;
  fields: { name: string; price: number; images: any }; // I know using "any" is not a good practice but airtable image api is super long to write out
}) => {
  return (
    <Wrapper>
      <Link to={`products/${id}`} className="product-link">
        <img src={images[0].url} alt="Featured product" />
        <FaSearch />
      </Link>
      <div className="product-description">
        <p className="product-name">{name}</p>
        <p className="product-price">{price / 100} €</p>
      </div>
    </Wrapper>
  );
};

export default Product;

const Wrapper = styled.div`
  position: relative;
  padding-top: 1.5rem;

  .product-link {
    img {
      height: 225px;
      width: 100%;
      object-fit: cover;
      transition: var(--transition);
      border-radius: var(--radius);
    }
    svg {
      position: absolute;
      font-size: 1.5rem;
      top: 45%;
      left: 50%;
      border-radius: 50%;
      color: var(--clr-orange);
      transition: var(--transition);
      opacity: 0;
    }
  }
  .product-link:hover {
    svg {
      opacity: 1;
    }
    img {
      opacity: 0.3;
    }
  }
  .product-description {
    display: flex;
    justify-content: space-between;
  }
  .product-information {
    display: inline;
  }
  .product-name {
    display: inline;
    text-transform: capitalize;
    letter-spacing: 0.08rem;
    font-size: 1.1rem;
  }
  .product-price {
    display: inline;
    font-size: 1.1rem;
    color: var(--clr-orange);
  }
  @media (min-width: 992px) {
    padding-top: 3rem;
  }
`;
