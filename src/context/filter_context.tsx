import { useProductsProvider } from "./products_context";
import React, { useEffect, useContext, VoidFunctionComponent } from "react";
import reducer from "../reducers/filter_reducer";
import { useReducer } from "react";

interface FILTER_CONTEXT_TYPE {
  filtered_products: any;
  all_products: any;
  grid_view: boolean;
  sort: string;
  toggleGridView: () => void;
  toggleListView: () => void;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
};
const FilterContext = React.createContext<FILTER_CONTEXT_TYPE | null>(null);

export const FilterProvider = ({ children }: { children: any }) => {
  // Typescript messing with destructering , have to take this approach for some reason
  const data = useProductsProvider();
  const products = data?.products;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  const toggleGridView = () => {
    dispatch({ type: "TOGGLE_GRID_VIEW" });
  };
  const toggleListView = () => {
    dispatch({ type: "TOGGLE_LIST_VIEW" });
  };
  const updateSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatch({ type: "UPDATE_SORT", payload: value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, toggleGridView, toggleListView, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
