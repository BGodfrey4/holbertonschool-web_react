import App from './App';
import { jest } from '@jest/globals';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';


window.alert = sinon.spy(

)


describe('<App />', () => {
  it('Will test that App will render without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // should contain the Notifications component
  it('Will test that App will render a Notifications component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications').exists()).toBe(true);
  });

  // should contain the Header component
  it('Will tests that App will render a Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header').exists()).toBe(true);
  });

  // should contain the Login component
  it('Tests that App renders a Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login').exists()).toBe(true);
  });

  // should contain the Footer component
  it('Will tests that App will render a Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });
  // check that CourseList is not displayed when isLoggedIn is false
  it('Will test that App will not render a CourseList component when its Logged in and is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find('CourseList').exists()).toBe(false);
  });
  // authenticates that when the keys control & h are pressed the logOut function, passes as a prop, is called then the alert function is called with the string which Logs you out

});

describe('<App /> with isLoggedIn', () => {

  const logout = jest.fn(() => console.log('logout running'));
  const alert = jest.spyOn(window, 'alert');

  it('just alerts and calls the function logout when ctrl-h is pressed', () => {
    const wrapper = shallow(<App isLoggedIn={true} logOut={logout} />);
    wrapper.instance().handleKeydown({ ctrlKey: true, key: 'h' });
    expect(alert).toHaveBeenCalledWith('Logging you out');
    expect(logout).toHaveBeenCalled();
  });

  
  // Login component is not displayed when isLoggedIn is true
  it('Will test that App does not render a Login component when its Logged in & is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('Login').exists()).toBe(false);
  });
  // CourseList component is displayed when isLoggedIn is true
  it('Will test that App will render the CourseList component when its Logged in & is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find('CourseList').exists()).toBe(true);
  });

});
