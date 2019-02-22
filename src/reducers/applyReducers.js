export default function applyReducer(reducers, initialState = {}) {
  return (state = initialState, action) => {
    const reducerFunc =
      reducers[action.type] ?
        reducers[action.type] : () => state;
    return reducerFunc(state, action);
  };
}

