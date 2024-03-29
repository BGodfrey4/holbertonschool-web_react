import React from "react";
import CourseListRow from "./CourseListRow";
import { EnzymeAdapter } from "enzyme";
import { shallow } from "enzyme";

describe("<CourseListRow />", () => {
  it("will render without crashing", () => {
    const wrapper = shallow(<CourseListRow />);
    expect(wrapper.exists()).toBe(true);
  });


  it('CourseListRow where the Header is true and no textSecondCell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" />
    );
    expect(wrapper.find('th').length).toEqual(1);
    expect(wrapper.find('th').text()).toEqual('test');
    expect(wrapper.find('th').prop('colSpan')).toEqual(2);
  });

  it('CourseListRow where the Header is true and textSecondCell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test2" />
    );
    expect(wrapper.find('th').length).toEqual(2);
    expect(wrapper.find('th').at(0).text()).toEqual('test');
    expect(wrapper.find('th').at(1).text()).toEqual('test2');
  });
});

