import sampleConstants from '../constants/sample';
import applyReducers from './applyReducers';

const defaultState = {
  testData: 'Click the button...',
};

const sample = (state, action) => ({
  ...state,
  testData: action.data,
});

export default applyReducers({
  [sampleConstants.SAMPLE]: sample,
}, defaultState);
