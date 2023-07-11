import React from 'react';

const WithLogging = (Wrapped) => {
  const name = Wrapped.displayName || Wrapped.name || 'Component';
  class Logging extends React.Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }
    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }
    render() {
      return <Wrapped {...this.props} />;
    }
  }
  Logging.displayName = `WithLogging(${name})`;
  return Logging;
};

export default WithLogging;
