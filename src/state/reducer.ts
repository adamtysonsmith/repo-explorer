import createReducer from './createReducer'
import { State, Sort, AppendedSearchResults } from './types'
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

export const rootReducer = createReducer(initialState, {
  [SET_SEARCH_QUERY]: (state: State, payload: string): State => ({
    ...state,
    searchQuery: payload,
  }),
  [APPEND_SEARCH_RESULTS]: (state: State, payload: AppendedSearchResults): State => ({
    ...state,
    searchResults: state.searchResults.concat(payload.nextSearchResults),
    totalResultsLength: payload.totalResultsLength,
    noResults: payload.noResults,
    nextPage: state.nextPage + 1,
  }),
  [SORT_BY]: (state: State, payload: Sort): State => ({
    ...state,
    searchResults: [],
    totalResultsLength: 0,
    noResults: false,
    nextPage: 1,
    sort: payload,
  }),
  [RESET_ALL]: (state: State): State => ({
    ...initialState
  }),
})
