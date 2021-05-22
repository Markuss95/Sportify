interface STATETYPE {
  isSidebarOpen: boolean;
  products_loading: boolean;
  products_error: boolean;
  selected_product: any;
  //I know it's not a good practice to use "any", but this is a practice project and products apy is very complicated, I m doing this to save time
  products: any[];
  featured_products: any[];
}

interface ACTIONTYPE {
  type: string;
  payload?: any;
}

const products_reducer = (state: STATETYPE, action: ACTIONTYPE) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, isSidebarOpen: false };
  }
  if (action.type === "GET_PRODUCTS_BEGIN") {
    return { ...state, products_loading: true };
  }
  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const featured_products = action.payload?.filter(
      (product: any) => product.fields.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  if (action.type === "GET_PRODUCTS_ERROR") {
    return { ...state, products_loading: false, products_error: true };
  }
  if (action.type === "SET_PRODUCT") {
    return { ...state, selected_product: action.payload };
  }

  return state;
};

export default products_reducer;
