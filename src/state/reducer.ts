import {
  SET_SEARCH_QUERY,
  APPEND_SEARCH_RESULTS,
  RESET_ALL,
} from './constants'

const createReducer = (initialState, reducers) => (state = initialState, action) => {
  const fn = reducers[action.type]
  return fn ? fn(state, action.payload) : state
}

export interface State {
  readonly searchQuery: string,
  readonly searchResults: any[];
  readonly totalResultsLength: number;
  readonly nextPage: number;
}

export const initialState: State = {
  searchQuery: '',
  searchResults: [],
  totalResultsLength: 0,
  nextPage: 1,
}

export const rootReducer = createReducer(initialState, {
  [SET_SEARCH_QUERY]: (state, payload): State => ({
    ...state,
    searchQuery: payload,
  }),
  [APPEND_SEARCH_RESULTS]: (state, payload): State => ({
    ...state,
    searchResults: state.searchResults.concat(payload.nextSearchResults),
    totalResultsLength: payload.totalResultsLength,
    nextPage: state.nextPage + 1,
  }),
  [RESET_ALL]: (state, payload): State => ({
    searchQuery: '',
    searchResults: [],
    totalResultsLength: 0,
    nextPage: 1,
  }),
})
