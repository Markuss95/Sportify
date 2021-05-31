interface STATETYPE {
  filtered_products: any;
  all_products: any;
  grid_view: boolean;
  sort: string;
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
}
interface ACTIONTYPE {
  type: string;
  payload?: any;
}

const filter_reducer = (state: STATETYPE, action: ACTIONTYPE) => {
  if (action.type === "LOAD_PRODUCTS") {
    let maxPrice = action.payload.map((product: any) => product.fields.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: maxPrice,
      },
    };
  }
  if (action.type === "TOGGLE_GRID_VIEW") {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === "TOGGLE_LIST_VIEW") {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === "UPDATE_SORT") {
    return {
      ...state,
      sort: action.payload,
    };
  }
  if (action.type === "SORT_PRODUCTS") {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.fields.price < b.fields.price) {
          return -1;
        }
        if (a.fields.price > b.fields.price) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.fields.price > b.fields.price) {
          return -1;
        }
        if (a.fields.price < b.fields.price) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.fields.name.localeCompare(b.fields.name) < 0) {
          return -1;
        }
        if (a.fields.name.localeCompare(b.fields.name) > 0) {
          return 1;
        }
        return 0;
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        if (a.fields.name.localeCompare(b.fields.name) < 0) {
          return 1;
        }
        if (a.fields.name.localeCompare(b.fields.name) > 0) {
          return -1;
        }
        return 0;
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }
  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { text, category, company, color, price, shipping } = state.filters;
    let tempProducts = [...all_products];
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.fields.name.toLowerCase().startsWith(text);
      });
    }
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.fields.category === category
      );
    }
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.fields.company === company
      );
    }
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.fields.colors.find((c: string) => c === color);
      });
    }
    tempProducts = tempProducts.filter(
      (product) => product.fields.price <= price
    );
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.fields.shipping === true
      );
    }
    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === "CLEAR_FILTERS") {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: state.filters.max_price,
        shipping: false,
      },
    };
  }
  return state;
};

export default filter_reducer;
