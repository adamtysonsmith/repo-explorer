import { State } from './types'
import { AnyAction } from 'redux'

type Reducers = {
  [action: string]: (state: State, payload: any) => State
}

type CreateReducer = (initialState: State, reducers: Reducers) => (state: State, action: AnyAction) => State

const createReducer: CreateReducer = (initialState, reducers) => (state = initialState, action) => {
  const fn = reducers[action.type]
  return fn ? fn(state, action.payload) : state
}

export default createReducer
