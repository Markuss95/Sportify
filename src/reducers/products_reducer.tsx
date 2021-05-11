interface STATETYPE {
  isSidebarOpen: boolean;
}

interface ACTIONTYPE {
  type: string;
}

const products_reducer = (state: STATETYPE, action: ACTIONTYPE) => {
  if (action.type === "SIDEBAR_OPEN") {
    return { ...state, isSidebarOpen: true };
  }
  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, isSidebarOpen: false };
  }
  return state;
};

export default products_reducer;
