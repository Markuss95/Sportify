import { useProductsProvider } from "./products_context";
import React, { useEffect, useContext, VoidFunctionComponent } from "react";
import reducer from "../reducers/filter_reducer";
import { useReducer } from "react";

interface FILTER_CONTEXT_TYPE {
  filtered_products: any;
  all_products: any;
  grid_view: boolean;
  sort: string;
  loading: boolean | undefined;
  filters: {
    text: string;
    company: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
  toggleGridView: () => void;
  toggleListView: () => void;
  updateSort: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  updateFilters: (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  clearFilters: () => void;
}
const initialState = {
  filtered_products: [],
  all_products: [],
  grid_view: true,
  sort: "price-lowest",
  filters: {
    text: "",
    company: "all",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
};
const FilterContext = React.createContext<FILTER_CONTEXT_TYPE | null>(null);

export const FilterProvider = ({ children }: { children: any }) => {
  // Typescript messing with destructering , have to take this approach for some reason
  const data = useProductsProvider();
  const loading = data?.products_loading;
  const products = data?.products;
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOAD_PRODUCTS", payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sort, state.filters]);

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
  //might be wrong type for e
  const updateFilters = (
    e:
      | React.FormEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const element = e.currentTarget as HTMLInputElement;
    const name = element.name;
    let value = element.value;
    const dataset = element.dataset["color"];

    if (value) {
      dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
    }
    if (value === "") {
      dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
    }
    if (dataset) {
      dispatch({ type: "UPDATE_FILTERS", payload: { name, value: dataset } });
    }
    if (name === "price") {
      dispatch({
        type: "UPDATE_FILTERS",
        payload: { name, value: parseInt(value, 10) },
      });
    }
    if (name === "shipping") {
      dispatch({
        type: "UPDATE_FILTERS",
        payload: { name, value: !state.filters.shipping },
      });
    }
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };
  return (
    <FilterContext.Provider
      value={{
        ...state,
        loading,
        toggleGridView,
        toggleListView,
        updateSort,
        updateFilters,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
