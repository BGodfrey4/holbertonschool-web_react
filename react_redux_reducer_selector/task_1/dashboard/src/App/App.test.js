import React from 'react';
import ReactDOM from 'react-dom';
import { jest } from '@jest/globals';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import App from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

window.alert = jest.fn();

describe('Test suite for rendering the App component', () => {
  it('test that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    assert.exists(wrapper);
  });

  it('test that after calling handleHideDrawer the state of displayDrawer is updated to false', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it('test that the default state for displayDrawer is false, and state changes to true after calling handleDisplayDrawer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state('displayDrawer')).toBe(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state('displayDrawer')).toBe(true);
  });
    // verify that when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out


  it('test that App renders with Header component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Header);
    expect(element.length).toBe(1);
  });

  it('test that App renders with Login component', () => {
    // const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    // const element = wrapper.find(Login);
    // expect(element.length).toBe(0);

    


  });

  it('test that App renders with Login component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(Login);
    expect(element.length).toBe(1);
  });

  it('test that App renders with Footer component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Footer);
    expect(element.length).toBe(1);
  });

  it('test that App renders with Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    const element = wrapper.find(Notifications);
    expect(element.length).toBe(1);
  });

  it('test that App renders with Notifications component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={false} />);
    const element = wrapper.find('div.notifications-div');
    expect(element.length).toBe(0);
  });

  it('test that App renders with CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={false} displayDrawer={true} />);
    const element = wrapper.find(CourseList);
    expect(element.length).toBe(0);
  });

  it('test that App renders with CourseList component', () => {
    const wrapper = shallow(<App isLoggedIn={true} displayDrawer={true} />);
    wrapper.instance().logIn();
    const element = wrapper.find(CourseList);
    expect(element.length).toBe(1);
  });

  it('alert is called when the keys control and h are pressed', () => {
    const wrapper = shallow(<App />);
    const alert = jest.spyOn(global, 'alert');
    const event = { key: 'h', ctrlKey: true };
    wrapper.instance().handleKeydown(event);
    expect(alert).toHaveBeenCalled();
    expect(alert).toHaveBeenCalledWith('Logging you out');
  });
});
