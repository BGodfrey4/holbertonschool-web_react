import { shallow } from "enzyme";
import React from "react";
import CourseListRow from "./CourseListRow";

describe("<CourseListRow />", () => {
  it("renders CourseListRow without crashing", () => {
    const wrapper = shallow(<CourseListRow textFirstCell="test" />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    wrapper.update();
    const item = wrapper.find("th");

    expect(item).toHaveLength(1);
    expect(item.prop("colSpan")).toEqual("2");
  });

  it("renders two cells when isHeader is true and textSecondCell is present", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    wrapper.update();
    const item = wrapper.find("th");

    expect(item).toHaveLength(2);
    expect(item.first().text()).toEqual("test");
    expect(item.at(1).text()).toEqual("second");
  });

  it("renders correctly two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="test"
        textSecondCell="second"
      />
    );
    wrapper.update();
    const item = wrapper.find("tr");

    expect(item).toHaveLength(1);
    expect(item.children("td")).toHaveLength(2);
  });
});

