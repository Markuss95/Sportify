import styled from "styled-components";
import { Link } from "react-router-dom";

const ListView = ({ products }: { products: any }) => {
  console.log(products);
  return (
    <Wrapper>
      {products.map((product: any) => {
        return (
          <div className="product-content" key={product?.id}>
            <div className="images">
              {" "}
              <img
                src={product?.fields?.images[0]?.url}
                alt={product?.fields?.description}
              />
            </div>
            <div>
              <h4>{product?.fields?.name}</h4>
              <p className="product-price">€{product?.fields?.price / 100} </p>
              <p className="product-description">
                {product?.fields?.description.substring(0, 150)}...
              </p>
              <Link to={`/products/${product?.id}`}>
                <button className="btn">DETAILS</button>
              </Link>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 1.5rem;
  .product-name {
    display: inline;
    text-transform: capitalize;
    letter-spacing: 0.08rem;
    font-size: 1.1rem;
  }
  .btn {
    padding: 0.2rem;
  }
  img {
    height: 225px;
    width: 100%;
    object-fit: cover;
    transition: var(--transition);
    border-radius: var(--radius);
    margin-top: rem;
  }
  .product-price {
    font-weight: 500;
  }
  @media (min-width: 992px) {
    .product-content {
      display: grid;
      gap: 1.5rem;
      grid-template-columns: 1fr 2fr;
      margin-bottom: 3rem;
    }
  }
`;
export default ListView;
