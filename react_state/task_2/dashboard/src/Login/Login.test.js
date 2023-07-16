import { shallow } from "enzyme";
import Login from "./Login";
import React from "react";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("in theory this function renders without crashing", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("this function should have 3 input tags & 2 label tags", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(3);
  });
});

describe("checks for submit input on form", () => {
  it("verify that the submit button is disabled by default", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });

  it("checks after changing value of the two inputs if button is enabled", () => {
    const wrapper = shallow(<Login />);

    wrapper.find("#email").simulate("change", { target: { value: "t" } });
    wrapper.find("#password").simulate("change", { target: { value: "t" } });
    expect(wrapper.find("input[type='submit']").props().disabled).toEqual(true);
  });
});
