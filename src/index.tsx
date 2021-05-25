import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";

ReactDOM.render(
  <ProductsProvider>
    <FilterProvider>
      <App />
    </FilterProvider>
  </ProductsProvider>,
  document.getElementById("root")
);
