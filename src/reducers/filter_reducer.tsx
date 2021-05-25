interface STATETYPE {
  filter_products: any;
  all_products: any;
}
interface ACTIONTYPE {
  type: string;
  payload?: any;
}

const filter_reducer = (state: STATETYPE, action: ACTIONTYPE) => {
  if (action.type === "LOAD_PRODUCTS") {
    return {
      ...state,
      all_products: [...action.payload],
      filter_products: [...action.payload],
    };
  }
  return state;
};

export default filter_reducer;
