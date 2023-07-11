import React from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite';

export default class CourseListRow extends React.Component {
  render() {
    const style = StyleSheet.create({
      tr: {
        borderBottom: this.props.isHeader ? '2px solid gray' : null,
        backgroundColor: this.props.isHeader ? '#f5f5f5ab' : '#deb5b545',
        textAlign: this.props.first ? 'center' : 'left',
      },
      th: {
        borderBottom: '2px solid gray',
      }
    });

    if (this.props.isHeader) {
      if (this.props.textSecondCell) {
        return (
          <tr className={css(style.tr)} >
            <th classname={css(style.th)}>{this.props.textFirstCell}</th>
            <th classname={css(style.th)}>{this.props.textSecondCell}</th>
          </tr>
        );
      } else {
        return (<tr className={css(style.tr)}><th colSpan="2" className={css(style.th)}>{this.props.textFirstCell}</th></tr>);
      }
    } else {
      return (
        <tr className={css(style.tr)} >
          <td classname={css(style.th)}>{this.props.textFirstCell}</td>
          <td classname={css(style.th)}>{this.props.textSecondCell}</td>
        </tr>
      );
    }
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: '',
  textSecondCell: null,
};
