import {
  SET_SEARCH_QUERY,
  APPEND_SEARCH_RESULTS,
  RESET_ALL,
} from './constants'

export interface AppendedSearchResults {
  nextSearchResults: any[];
  totalResultsLength: number;
}

export const setSearchQuery = (searchQuery: string) => ({
  type: SET_SEARCH_QUERY,
  payload: searchQuery,
})

export const appendSearchResults = (payload: AppendedSearchResults) => ({
  type: APPEND_SEARCH_RESULTS,
  payload,
})

export const resetAll = () => ({
  type: RESET_ALL,
})
