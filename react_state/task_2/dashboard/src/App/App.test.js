/**
 *  alternate environment
 */
import React from "react";
import { AppContext, user, logOut } from "./AppContext";
import App from "./App";
import { StyleSheetTestUtils } from "aphrodite";
import Login from "../Login/Login";
import { shallow, mount } from "enzyme";
import Header from "../Header/Header";
import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("renders the current components", () => {
  it("renders App component without crashing", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it("contains Notifications component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("contains Header component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("contains Login component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("contains Footer function", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it("checks to see if CourseList function is not rendered", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

describe("when isLogged in = true", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state().user).toEqual(user);

  it("checks Login is not rendered", () => {
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it("checks to see if CourseList is rendered", () => {
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it(`This function checks to see if the logIn function updates user state correctly`, () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logIn(myUser.email, myUser.password);
    expect(wrapper.state().user).toEqual(myUser);
    wrapper.unmount();
  });

  it(`this function checks to see if logOut function updates user state correctly`, () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );

    const myUser = {
      email: "testy@gmail.com",
      password: "testy",
      isLoggedIn: true,
    };

    expect(wrapper.state().user).toEqual(user);
    const instance = wrapper.instance();
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
    wrapper.unmount();
  });
});

describe("state of App.js test", () => {
  it("displayDrawer initial value should be set to false", () => {
    const wrapper = mount(<App />);

    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("displayDrawer set to true after requesting handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();

    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it("displayDrawer set to false after requesting handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleHideDrawer();

    expect(wrapper.state().displayDrawer).toBe(false);
  });
});
