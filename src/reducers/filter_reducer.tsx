interface STATETYPE {
  filtered_products: any;
  all_products: any;
  grid_view: boolean;
  sort: string;
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
  return state;
};

export default filter_reducer;
