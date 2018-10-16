import React from 'react'
import { Dispatch, AnyAction } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { GITHUB_API } from '../config'
import SearchResults from '../components/SearchResults'
import { State, AppendedSearchResults } from '../state/types'
import { appendSearchResults } from '../state/actions'

interface DispatchProps {
  appendSearchResults: (data: AppendedSearchResults) => void;
}

class SearchResultsContainer extends React.PureComponent<State & DispatchProps> {
  getUrl = () => {
    const urlsBySort = {
      relevance: `${GITHUB_API}?q=${this.props.searchQuery}&page=${this.props.nextPage}`,
      stars: `${GITHUB_API}?q=${this.props.searchQuery}&page=${this.props.nextPage}&sort=stars`,
    }

    return urlsBySort[this.props.sort]
  }

  fetchData = () => {
    if (this.props.searchQuery) {
      return axios.get(this.getUrl())
        .then(res => {
          this.props.appendSearchResults({
            nextSearchResults: res.data.items,
            totalResultsLength: res.data.total_count,
            noResults: !res.data.total_count,
          })
        })
    }
  }

  hasMore = (): boolean => {
    if (this.props.noResults) return false
    if (this.props.searchQuery && !this.props.totalResultsLength) return true
    return this.props.totalResultsLength > this.props.searchResults.length
  }

  render() {
    const props = {
      totalResultsLength: this.props.totalResultsLength,
      searchResults: this.props.searchResults,
      noResults: this.props.noResults,
      fetchData: this.fetchData,
      hasMore: this.hasMore(),
    }
  
    return <SearchResults {...props} />
  }
}

// grab the entire state
const mapStateToProps = (state: State): State => ({ ...state })

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  appendSearchResults: (data: AppendedSearchResults) => dispatch(appendSearchResults(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer as any)
