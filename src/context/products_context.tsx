import { useContext, useReducer } from "react";
import React from "react";
import reducer from "../reducers/products_reducer";

interface PRODUCTS_CONTEXT_TYPE {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
}

const initialState = {
  isSidebarOpen: false,
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
  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsProvider = () => {
  return useContext(ProductsContext);
};
