import { connect } from 'react-redux';

import registry from '../actions/actionsRegistry';
import Sample from '../dumb/sample';

const mapDispatchToProps = dispatch => registry(['sample'], dispatch);

const mapStateToProps = state => ({
  testData: state.sample.testData,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sample);
