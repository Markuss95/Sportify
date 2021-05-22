import { useContext, useReducer, useEffect } from "react";
import React from "react";
import reducer from "../reducers/products_reducer";
import { url } from "../utlis/constants";
import axios from "axios";

interface PRODUCTS_CONTEXT_TYPE {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  //I know it's not a good practice to use "any", but this is a practice project and products apy is very complicated, I m doing this to save time
  products: any[];
  featured_products: any[];
  selected_product: any;
  openSidebar: () => void;
  closeSidebar: () => void;
  updateSelectedProduct: (product: any) => void;
}

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  selected_product: {},
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
  const updateSelectedProduct = (product: any) => {
    dispatch({ type: "SET_PRODUCT", payload: product });
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);
  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, updateSelectedProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsProvider = () => {
  return useContext(ProductsContext);
};
