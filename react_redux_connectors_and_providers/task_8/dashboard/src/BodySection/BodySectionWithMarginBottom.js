import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';


class BodySectionWithMarginBottom extends Component {
  render() {
    const style = StyleSheet.create({
      bodySectionWithMargin: {
        marginBottom: '40px',
      },
    });
    return (
      <div className={`bodySectionWithMargin ${css(style.bodySectionWithMargin)}`}>
        <BodySection {...this.props} />
      </div>
    );
  }
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string.isRequired,
};

BodySectionWithMarginBottom.defaultProps = {
  title: '',
};

export default BodySectionWithMarginBottom;
