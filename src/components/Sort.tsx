import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { BsFillGridFill, BsList } from "react-icons/bs";

const Sort = () => {
  const data = useFilterContext();
  const products = data?.filtered_products;
  const grid_view = data?.grid_view;
  return (
    <Wrapper>
      <div className="btn-container">
        <BsFillGridFill
          className={`${grid_view && "active"}`}
          onClick={() => data?.toggleGridView()}
        />
        <BsList
          className={`${!grid_view && "active"}`}
          onClick={() => data?.toggleListView()}
        />
      </div>
      <p>{data?.filtered_products.length} Products Found</p>
      <hr />
      <div className="dropdown">
        <label htmlFor="sort">Sort By</label>
        <select
          name="sort"
          id="sort"
          value={data?.sort}
          onChange={data?.updateSort}
        >
          <option value="price-lowest">Price (Lowest)</option>
          <option value="price-highest">Price (Highest)</option>
          <option value="name-a">Name (A-Z)</option>
          <option value="name-z">Name (Z-A)</option>
        </select>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: auto auto 1fr auto;
  hr {
    margin-top: 0.8rem;
  }
  label {
    padding-right: 1rem;
    font-size: 1rem;
  }

  .dropdown {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }
  select {
    font-size: 1rem;
    border: none;
  }
  option {
    font-size: 1.2rem;
  }
  .btn-container {
    display: flex;
    justify-content: start;

    svg {
      padding: 0.2rem;
      cursor: pointer;
      font-size: 1.5rem;
      border-radius: var(--radius);
      margin-right: 0.5rem;
      border: 1px solid black;
    }
    .active {
      background-color: black;
      color: white;
    }
  }
`;
export default Sort;
