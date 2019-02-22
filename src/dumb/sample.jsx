import React from 'react';
import PropTypes from 'prop-types';

const Sample = props => (
  <div>
    <h1>{props.testData}</h1>
    <button onClick={() => props.sampleAction()}>
      Click me
    </button>
  </div>
);

Sample.propTypes = {
  testData: PropTypes.string.isRequired,
  sampleAction: PropTypes.func.isRequired,
};

export default Sample;
