import React from "react";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import { StyleSheet, css } from "aphrodite";


function CourseList({ listCourses }) {
  const style = StyleSheet.create({
    table: {
      border: '1px solid gray',
      width: '100%',
      borderCollapse: 'collapse',
      textAlign: 'left',
    },
    thead: {
      fontWeight: 'bold',
      ':nth-child(1n) > :first-child': {
        textAlign: 'center',
      },
    },
  });

return (
  <table className={`Courselist ${css(style.table)}`}>
    <thead className={css(style.thead)}>
      <CourseListRow textFirstCell="Available courses" isHeader={true} />
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
    </thead>
    <tbody>
      {listCourses.length === 0 ? (
        <CourseListRow textFirstCell="No course available yet" />
      ) : (
        listCourses.map((course) => (
          <CourseListRow
            key={course.id}
            textFirstCell={course.name}
            textSecondCell={course.credit}
          />
        ))
      )}
    </tbody>
  </table>
);
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};



export default CourseList;
