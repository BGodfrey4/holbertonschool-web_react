import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  
  const backgroundColor = isHeader ? "#deb5b545" : "#f5f5f5ab";
  const style = { backgroundColor };
  if (isHeader) {
    if (textSecondCell) {
      return (
        <tr style={style}>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={style}>
          <th colSpan={2}>{textFirstCell}</th>
        </tr>
      );
    }
  }
  return (
    <tr style={style}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: "",
  textSecondCell: "",
};

export default CourseListRow;
