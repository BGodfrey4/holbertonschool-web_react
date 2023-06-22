import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  it('Will test if Header renders without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Will test that Header will render an img and h1 tag', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('h1').exists()).toBe(true);
  });

});
