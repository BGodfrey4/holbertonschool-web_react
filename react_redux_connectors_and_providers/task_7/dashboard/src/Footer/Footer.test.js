import Footer from './Footer';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Footer />', () => {
  it('Tests that Footer renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

});
