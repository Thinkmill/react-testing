// add.test.js

import { add } from './add.js';
import expect from 'expect';

describe('add()', () => {
  it('adds two numbers', () => {
    expect(add(2, 3)).toEqual(5);
  });

  it('doesnt add the third number', () => {
    expect(add(2, 3, 5)).toEqual(add(2, 3));
  });
});
