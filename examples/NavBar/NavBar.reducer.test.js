// NavBar.reducer.test.js

import expect from 'expect';
import NavBarReducer from './NavBar.reducer';
import { TOGGLE_NAV } from './NavBar.constants';
import { toggleNav } from './NavBar.actions';

describe('NavBarReducer', () => {
  it('returns the initial state', () => {
    expect(NavBarReducer(undefined, {})).toEqual({
      open: false
    });
  });

  it('handles the toggleNav action', () => {
    expect(NavBarReducer(undefined, toggleNav())).toEqual({
      open: true
    })
  });
});
