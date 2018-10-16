import {
  SET_SEARCH_QUERY,
  APPEND_SEARCH_RESULTS,
  SORT_BY,
  RESET_ALL,
} from './constants'
import { Sort, AppendedSearchResults } from './types'

export const setSearchQuery = (searchQuery: string) => ({
  type: SET_SEARCH_QUERY,
  payload: searchQuery,
})

export const appendSearchResults = (payload: AppendedSearchResults) => ({
  type: APPEND_SEARCH_RESULTS,
  payload,
})

export const sortBy = (payload: Sort) => ({
  type: SORT_BY,
  payload,
})

export const resetAll = () => ({
  type: RESET_ALL,
})
