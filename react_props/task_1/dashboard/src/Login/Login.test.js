import Login from './Login';
import React from 'react';
import { shallow } from 'enzyme';

describe('<Login />', () => {
  it('Is the test that Login will render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
  // Verify that the components renders 2 input tags and 2 label tags
  it('Will test that Login will render 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toBe(3);
    expect(wrapper.find('label').length).toBe(2);
  });

});
