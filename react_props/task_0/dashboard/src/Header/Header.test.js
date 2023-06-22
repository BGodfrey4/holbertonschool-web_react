import Header from './Header';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Header />', () => {
  it('Will test that Header will render without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toBe(true);
  });
});
