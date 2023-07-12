import React from 'react';
import Login from './Login';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Login', () => {
  it('Login renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists());
  });

  it('Login renders input tags', () => {
    const wrapper = shallow(<Login />);
    assert.equal(wrapper.find('input').length, 2);
  });

  it('Login renders label tags', () => {
    const wrapper = shallow(<Login />);
    assert.equal(wrapper.find('label').length, 2);
  });
});
