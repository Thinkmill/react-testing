// Button.test.js

import Button from './Button.react';
import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
  it('renders a <button>', () => {
    const renderedComponent = shallow(
      <Button></Button>
    );

    expect(
      renderedComponent.find("button").node
    ).toExist();
  });

  it('renders text', () => {
    const text = "Click me!";
    const renderedComponent = shallow(
      <Button>{ text }</Button>
    );

    expect(
      renderedComponent.contains(text)
    ).toEqual(true);
  });

  it('handles clicks', () => {
    const onClickSpy = expect.createSpy();
    const renderedComponent = shallow(
      <Button onClick={onClickSpy} />
    );

    renderedComponent.find('button').simulate('click');

    expect(onClickSpy).toHaveBeenCalled();
  });
});
