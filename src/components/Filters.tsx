import styled from "styled-components";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utlis/functions";
const Filters = () => {
  const data = useFilterContext();
  const categories = getUniqueValues(data?.all_products, "category");
  const companies = getUniqueValues(data?.all_products, "company");
  const colors = getUniqueValues(data?.all_products, "colors");
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [mainColor, setMainColor] = useState(colors[0]);
  const wrapperFunction = (e: React.MouseEvent<HTMLElement>, index: number) => {
    setCategoryIndex(index);
    data?.updateFilters(e);
  };
  const colorsWrapperFunction = (e: React.MouseEvent<HTMLElement>) => {
    setMainColor(e.currentTarget.dataset["color"]);
    data?.updateFilters(e);
  };
  return (
    <Wrapper>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-item">
            <input
              name="text"
              placeholder="Search"
              type="text"
              value={data?.filters?.text}
              className="text-input"
              onChange={data?.updateFilters}
            />
          </div>
          <div className="form-item">
            <h5>category</h5>
            <div className="categories">
              {/*don't get it why I can't make category:string, typeof category returns "string" and string only*/}
              {categories.map((category: any, index: number) => {
                console.log();
                return (
                  <div key={index}>
                    <button
                      name="category"
                      type="button"
                      value={category}
                      className={`${index === categoryIndex && "underline"}`}
                      onClick={(e) => wrapperFunction(e, index)}
                    >
                      {category}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="form-item">
            <h5>company</h5>
            <select
              className="company-select"
              name="company"
              id=""
              value={data?.filters?.company}
              onChange={data?.updateFilters}
            >
              {/*don't get it why I can't make company:string, typeof company returns "string" and string only*/}
              {companies.map((company: any, index) => {
                return (
                  <option key={index} value={company}>
                    {company}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-item">
            <h5>colors</h5>
            <div className="colors">
              {colors.map((color, index) => {
                if (index === 0) {
                  return (
                    <button
                      onClick={colorsWrapperFunction}
                      key={index}
                      data-color="all"
                      name="color"
                      className={`${
                        mainColor === colors[0]
                          ? "button-all-underline"
                          : "button-all"
                      }`}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name="color"
                    className="color-circle"
                    style={{ background: `${color}` }}
                    onClick={colorsWrapperFunction}
                    data-color={color}
                  >
                    {mainColor === color && <FaCheck />}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="form-item">
            <h5>price</h5>
            <p className="range-price">
              {data?.filters?.price && data?.filters?.price / 100} €
            </p>
            <input
              type="range"
              name="price"
              onChange={data?.updateFilters}
              min={data?.filters?.min_price}
              max={data?.filters?.max_price}
              value={data?.filters?.price}
            ></input>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .text-input {
    height: 2rem;
    border: none;
    border-radius: var(--radius);
    background-color: var(--clr-grey-10);
  }
  .text-input::placeholder {
    padding-left: 0.7rem;
  }
  .range-price {
    margin-bottom: 0.5rem;
  }
  .form-item {
    margin-bottom: 1.2rem;
  }
  .button-all {
    cursor: pointer;
    border: none;
    padding-top: 0.2rem;
    background: none;
    color: var(--clr-grey-5);
  }
  .button-all-underline {
    cursor: pointer;
    border: none;
    background: none;
    padding-top: 0.2rem;
    color: var(--clr-grey-5);
    border-bottom: 1px solid currentColor;
    padding-bottom: 1px;
    text-decoration: none;
  }
  .company-select {
    height: 1.6rem;
    border: none;
    background-color: var(--clr-grey-10);
  }
  .colors {
    display: flex;
    justify-content: start;
  }
  .color-circle {
    cursor: pointer;
    display: inline-block;
    height: 20px;
    width: 20px;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
    border-radius: 50%;
    border: none;
    svg {
      color: white;
      height: 20px;
    }
  }

  .categories {
    display: flex;
    flex-direction: column;
    button {
      cursor: pointer;
      font-size: 0.87rem;
      text-transform: capitalize;
      letter-spacing: 0.05rem;
      margin-bottom: 0.9rem;
      border: none;
      background: none;
      text-align: left;
      color: var(--clr-grey-5);
    }
    .underline {
      border-bottom: 1px solid currentColor;
      padding-bottom: 1px;
      text-decoration: none;
    }
  }
`;
export default Filters;
