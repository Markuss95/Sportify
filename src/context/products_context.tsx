import { useContext } from "react";
import React from "react";

const ProductsContext = React.createContext<string | null>(null);
export const ProductsProvider = ({ children }: { children: any }) => {
  return (
    <ProductsContext.Provider value="test">{children}</ProductsContext.Provider>
  );
};

export const useProductsProvider = () => {
  return useContext(ProductsContext);
};
