import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('<Header />', () => {
  it('Will test that Header renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Will test that Header renders an img and h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

});
