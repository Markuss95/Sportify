import styled from "styled-components";
import { useState } from "react";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues } from "../utlis/functions";
const Filters = () => {
  const data = useFilterContext();
  const categories = getUniqueValues(data?.all_products, "category");
  const companies = getUniqueValues(data?.all_products, "company");
  const colors = getUniqueValues(data?.all_products, "colors");
  const [categoryIndex, setCategoryIndex] = useState(0);

  const wrapperFunction = (e: React.MouseEvent<HTMLElement>, index: number) => {
    setCategoryIndex(index);
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
          <div className="company">
            <h5>company</h5>
            <select
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
  .form-item {
    margin-bottom: 1.2rem;
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
