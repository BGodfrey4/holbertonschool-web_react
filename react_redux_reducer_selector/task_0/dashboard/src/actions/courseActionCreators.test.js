import { selectCourse, unSelectCourse } from "./courseActionCreators";


describe("courseActionCreators", () => {
  it("should create an action to select a course", () => {
    const index = 1;
    const expectedAction = {
      type: "SELECT_COURSE",
      payload: index,
    };
    expect(selectCourse(index)).toEqual(expectedAction);
  });

  it("should create an action to unselect a course", () => {
    const index = 1;
    const expectedAction = {
      type: "UNSELECT_COURSE",
      payload: index,
    };
    expect(unSelectCourse(index)).toEqual(expectedAction);
  });
});
