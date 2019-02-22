/**
 * This file should import all our reducers, combine them
 * and then export them as a store that we can pass into
 * our provider.
 */
import { combineReducers, createStore } from 'redux';
import sampleReducer from './sampleReducer';

const reducers = {
  sample: sampleReducer,
};

export default createStore(combineReducers(reducers));
