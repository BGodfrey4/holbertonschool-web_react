import React from "react";
import CourseListRow from "./CourseListRow";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe("<CourseListRow />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.exists()).toBe(true);
  });


  it('CourseListRow with isHeader true and no textSecondCell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    expect(wrapper.find('th').length).toEqual(1);
    expect(wrapper.find('th').text()).toEqual('test');
    expect(wrapper.find('th').prop('colSpan')).toEqual("2");
  });

  it('CourseListRow with isHeader true and textSecondCell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />
    );
    expect(wrapper.find('th').length).toEqual(2);
    expect(wrapper.find('th').at(0).text()).toEqual('test');
    expect(wrapper.find('th').at(1).text()).toEqual('test2');
  });
});
