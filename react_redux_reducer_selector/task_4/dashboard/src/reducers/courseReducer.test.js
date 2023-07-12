import courseReducer, { initialState } from "./courseReducer";
import { SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';
import { fetchCourseSuccess } from '../actions/courseActionCreators';
import { coursesNormalizer } from "../schema/courses";
import { Map, merge, setIn } from 'immutable';

describe("courseReducer", () => {
  
  const courses = [
    { id: 1, name: "ES6", credit: 60, isSelected: false },
    { id: 2, name: "Webpack", credit: 20, isSelected: false },
    { id: 3, name: "React", credit: 40, isSelected: false }
  ];
  const coursesOneTrue = [
    { id: 1, name: "ES6", credit: 60, isSelected: true },
    { id: 2, name: "Webpack", credit: 20, isSelected: false },
    { id: 3, name: "React", credit: 40, isSelected: false }
  ];

  it("returns initial state when called with undefined state and action", () => {
    const expected = courseReducer(undefined, { type: "UNKNOWN" });
    expect(expected).toEqual(initialState);
  });

  it('handles FETCH_COURSE_SUCCESS action correctly', () => {
    const expected = courseReducer(initialState, fetchCourseSuccess(courses));
    expect(expected).toEqual(coursesNormalizer(courses));
  });

  it('handles SELECT_COURSE action correctly', () => {
    const expected = courseReducer(initialState, { type: SELECT_COURSE, courseId: 1 });
    expect(expected).toEqual(setIn(initialState, [1, 'isSelected'], true));
  });

  it('handles UNSELECT_COURSE action correctly', () => {
    const expected = courseReducer(initialState, { type: UNSELECT_COURSE, courseId: 1 });
    expect(expected).toEqual(setIn(initialState, [1, 'isSelected'], false));
  });

  
 
});
