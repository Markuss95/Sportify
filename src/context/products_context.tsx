import { useContext, useReducer, useEffect } from "react";
import React from "react";
import reducer from "../reducers/products_reducer";
import { url } from "../utlis/constants";
import axios from "axios";

interface PRODUCTS_CONTEXT_TYPE {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
};
const ProductsContext = React.createContext<PRODUCTS_CONTEXT_TYPE | null>(null);
export const ProductsProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };
  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  const fetchProducts = async (url: string) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const {
        data: { records: products },
      } = await axios.get(url);
      dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsProvider = () => {
  return useContext(ProductsContext);
};
