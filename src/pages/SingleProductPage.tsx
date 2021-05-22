import styled from "styled-components";
import { useState, useEffect } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { PageHero, Stars } from "../components";
import { useProductsProvider } from "../context/products_context";
import { useParams, Link } from "react-router-dom";

const SingleProductPage = () => {
  const data = useProductsProvider();
  const product_id = useParams();
  const id = Object.values(product_id)[0];
  const product = data?.products.find((product) => product.id === id);
  const [imageId, setImageId] = useState(0);
  const [counter, setCounter] = useState(1);
  const colors = product?.fields?.colors;
  console.log(data?.selected_product);
  const updateImageId = (id: number) => {
    setImageId(id);
  };
  const updateState = (product: any) => {
    data?.updateSelectedProduct(product);
  };
  const increaseCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };
  const reduceCounter = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
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
          <div className="product-content-description">
            <h2 className="title">{product?.fields?.name}</h2>
            <Stars />
            <p className="product-price">{product?.fields?.price / 100} €</p>
            <p className="product-text-description">
              {product?.fields?.description}
            </p>
            <p>
              <span>Available :</span>{" "}
              {product?.fields?.stock > 0 ? "In Stock" : "Out of Stock"}
            </p>
            <p>
              <span>Bar Code :</span> {product?.id}
            </p>
            <p className="brand">
              <span>Brand :</span> {product?.fields?.company}
            </p>
            <hr />
            <p>
              <span>Colors :</span>
              <span className="colors">
                {colors?.map((color: string) => {
                  switch (color) {
                    case "#000":
                      return <span key={color} className="black-circle"></span>;
                    case "#0000ff":
                      return <span key={color} className="blue-circle"></span>;
                    case "#ff0000":
                      return <span key={color} className="red-circle"></span>;
                    case "#ffb900":
                      return (
                        <span key={color} className="orange-circle"></span>
                      );
                    case "#00ff00":
                      return <span key={color} className="green-circle"></span>;
                  }
                })}
              </span>
            </p>
            <div className="item-counter">
              <p className="counter">
                <button className="sign" onClick={increaseCounter}>
                  <FaPlus />
                </button>{" "}
                <span className="counter-number">{counter}</span>{" "}
                <button className="sign" onClick={reduceCounter}>
                  <FaMinus />
                </button>
              </p>
            </div>
            <div className="btn" onClick={() => updateState(product)}>
              Add to cart
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .sign {
    margin-left: 1.5rem;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  .counter-number {
    font-size: 2rem;
    margin-left: 1.5rem;
  }

  .product-content {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }
  hr {
    padding-bottom: 1.5rem;
  }
  .secondary-images {
    display: grid;
    gap: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
  .secondary-image:hover {
    opacity: 0.3;
  }
  .colors {
    position: absolute;
    margin-left: 2.5rem;
  }
  .orange-circle {
    cursor: pointer;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    background-color: var(--clr-orange);
    border-radius: 50%;
  }
  .red-circle {
    cursor: pointer;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    background-color: red;
    border-radius: 50%;
  }
  .green-circle {
    cursor: pointer;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    background-color: green;
    border-radius: 50%;
  }
  .blue-circle {
    cursor: pointer;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    background-color: blue;
    border-radius: 50%;
  }
  .black-circle {
    cursor: pointer;
    display: inline-block;
    margin-left: 25px;
    height: 20px;
    width: 20px;
    margin-left: 0.3rem;
    margin-top: 0.3rem;
    background-color: #000;
    border-radius: 50%;
  }
  .secondary-image {
    cursor: pointer;
    height: 75px;
    width: 100%;
    object-fit: cover;
    border-radius: var(--radius);
    opacity: 1;
    transition: var(--transition);
  }
  .main-img {
    border-radius: 0.5rem;
    padding-top: 0.3rem;
    width: 100%;
    height: 500px;
    display: inline-block;
    object-fit: cover;
  }
  span {
    font-weight: bold;
  }
  .btn {
    margin-bottom: 2rem;
  }
  .title {
    text-align: left;
  }
  .product-price {
    font-weight: 500;
  }
  .product-text-description {
    line-height: 2rem;
  }
  .brand {
    text-transform: capitalize;
  }
  .counter {
    font-size: 1rem;
    color: var(--clr-grey-1);
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
