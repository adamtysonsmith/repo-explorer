// @todo types
const createReducer = (initialState, reducers) => (state = initialState, action) => {
  const fn = reducers[action.type]
  return fn ? fn(state, action.payload) : state
}

export default createReducer