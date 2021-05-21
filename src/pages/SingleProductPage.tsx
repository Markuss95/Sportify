import styled from "styled-components";
import { useState } from "react";
import { PageHero } from "../components";
import { useProductsProvider } from "../context/products_context";
import { useParams, Link } from "react-router-dom";

const SingleProductPage = () => {
  const data = useProductsProvider();
  const product_id = useParams();
  const id = Object.values(product_id)[0];
  const product = data?.products.find((product) => product.id === id);

  const [imageId, setImageId] = useState(0);

  const updateImageId = (id: number) => {
    setImageId(id);
  };

  return (
    <Wrapper>
      <PageHero title="products" subtitle={product?.fields?.name} />
      <div className="section section-center">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-content">
          <div className="product-content-images">
            <div>
              <img
                src={product?.fields?.images[imageId]?.url}
                alt=""
                className="main-img"
              />
            </div>
            <div className="secondary-images">
              <img
                src={product?.fields?.images[0]?.url}
                alt=""
                className="secondary-image"
                onClick={() => updateImageId(0)}
              />
              <img
                src={product?.fields?.images[1]?.url}
                alt=""
                className="secondary-image"
                onClick={() => updateImageId(1)}
              />
              <img
                src={product?.fields?.images[2]?.url}
                alt=""
                className="secondary-image"
                onClick={() => updateImageId(2)}
              />
              <img
                src={product?.fields?.images[3]?.url}
                alt=""
                className="secondary-image"
                onClick={() => updateImageId(3)}
              />
              <img
                src={product?.fields?.images[4]?.url}
                alt=""
                className="secondary-image"
                onClick={() => updateImageId(4)}
              />
            </div>
          </div>
          <div>
            <h2 className="title">Modern Poster</h2>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .product-content {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }
  .secondary-images {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .secondary-image {
    cursor: pointer;
    height: 75px;
    width: 100%;
    object-fit: cover;
    border-radius: var(--radius);
  }
  .main-img {
    border-radius: var(--radius);
    width: 100%;
    height: 500px;
    display: inline-block;
    object-fit: cover;
  }
  .btn {
    margin-bottom: 2rem;
  }
  .title {
    text-align: left;
  }
  @media (min-width: 992px) {
    .btn {
      margin-bottom: 3rem;
    }
    .product-content {
      display: grid;
      gap: 2.5rem;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default SingleProductPage;
