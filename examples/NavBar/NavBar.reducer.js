// NavBar.reducer.js

import { TOGGLE_NAV } from './NavBar.constants.js';

const initialState = {
  open: false
};

export default function NavBarReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return Object.assign({}, state, {
        open: !state.open
      });
    default:
      return state;
  }
}
