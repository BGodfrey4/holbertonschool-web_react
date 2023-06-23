import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BodySection.css';
import BodySection from './BodySection';


class BodySectionWithMarginBottom extends Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
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
