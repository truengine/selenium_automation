import { bindActionCreators } from 'redux';
import sampleActions from './sampleActions';

const registry = {
  sample: sampleActions,
};

const fetchActions = (actionLookups, dispatch) => {
  let actions = {};
  actionLookups.forEach((action) => {
    if (registry[action]) {
      actions = {
        ...actions,
        ...registry[action],
      };
    }
  });
  return bindActionCreators(actions, dispatch);
};

export default fetchActions;
