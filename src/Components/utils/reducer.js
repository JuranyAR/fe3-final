import actionTypes from './actionsTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_THEME:
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case actionTypes.SET_DENTISTS:
      return { ...state, dentists: action.payload };
    case actionTypes.ADD_TO_FAVS:
      const updatedFavs = [...state.favDentists, action.payload];
      localStorage.setItem('favDentists', JSON.stringify(updatedFavs));
      return { ...state, favDentists: updatedFavs };
    case actionTypes.REMOVE_FAV:
        const filteredFavs = state.favDentists.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favDentists: filteredFavs };
    default:
      return state;
  }
};

export default reducer;