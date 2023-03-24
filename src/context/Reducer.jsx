export const movieReducer = (state, action) => {
  switch (action.type) {
    case "searchInput":
      return {
        ...state,
        input: action.payload,
      };
    case "addWatchlist":
      return {
        ...state,
        watchlist: [...state.watchlist, { ...action.payload }],
      };
    case "removeWatchlist":
      return {
        ...state,
        watchlist: state.watchlist.filter((c) => c.id !== action.payload.id),
      };

    default:
      return state;
  }
};
