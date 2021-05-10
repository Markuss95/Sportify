import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { ProductsProvider } from "./context/products_context";

ReactDOM.render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
  document.getElementById("root")
);
