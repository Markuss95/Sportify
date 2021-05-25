interface STATETYPE {
  filtered_products: any;
  all_products: any;
  grid_view: boolean;
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
      filtered_products: [...action.payload],
    };
  }
  return state;
};

export default filter_reducer;
