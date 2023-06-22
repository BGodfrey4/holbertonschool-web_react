import App from './App';
import { shallow } from 'enzyme';
import React from 'react';

describe('<App />', () => {
  it('Test that App will render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // should contain the Notifications component
  it('Is the test that App renders a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  // should contain the Header component
  it('Tests that App will render a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  // should contain the Login component
  it('Tests that App will render a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  // should contain the Footer component
  it('Tests that App will render a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });
 
});
