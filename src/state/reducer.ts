import createReducer from './createReducer'
import { State, Sort } from './types'
import {
  SET_SEARCH_QUERY,
  APPEND_SEARCH_RESULTS,
  RESET_ALL,
  SORT_BY,
} from './constants'

export const initialState: State = {
  searchQuery: '',
  searchResults: [],
  totalResultsLength: 0,
  noResults: false,
  nextPage: 1,
  sort: 'relevance',
}

// @todo types
export const rootReducer = createReducer(initialState, {
  [SET_SEARCH_QUERY]: (state, payload): State => ({
    ...state,
    searchQuery: payload,
  }),
  [APPEND_SEARCH_RESULTS]: (state, payload): State => ({
    ...state,
    searchResults: state.searchResults.concat(payload.nextSearchResults),
    totalResultsLength: payload.totalResultsLength,
    noResults: payload.noResults,
    nextPage: state.nextPage + 1,
  }),
  [SORT_BY]: (state, payload: Sort): State => ({
    ...state,
    searchResults: [],
    totalResultsLength: 0,
    noResults: false,
    nextPage: 1,
    sort: payload,
  }),
  [RESET_ALL]: (state, payload: State): State => ({
    ...initialState
  }),
})
