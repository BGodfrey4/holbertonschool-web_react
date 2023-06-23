import Login from './Login';
import React from 'react';

describe('<Login />', () => {
  it('Will test that Login will render without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });
  
});
