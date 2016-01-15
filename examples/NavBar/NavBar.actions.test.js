// NavBar.actions.test.js

import { toggleNav } from './NavBar.actions';
import { TOGGLE_NAV } from './NavBar.constants';
import expect from 'expect';

describe('NavBar actions', () => {
  describe('toggleNav', () => {
    it('should return the correct constant', () => {
      expect(toggleNav()).toEqual({
        type: TOGGLE_NAV
      });
    });
  });
});
