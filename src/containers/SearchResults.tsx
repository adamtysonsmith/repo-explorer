import React from 'react'
import { Dispatch, AnyAction } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import { GITHUB_API } from '../config'
import SearchResults from '../components/SearchResults'
import { State } from '../state/reducer'
import { AppendedSearchResults, appendSearchResults } from '../state/actions'

interface StateProps {
  searchQuery: string;
  searchResults: any[];
  totalResultsLength: number;
  nextPage: number;
}

interface DispatchProps {
  appendSearchResults: (data: AppendedSearchResults) => void;
}

class SearchResultsContainer extends React.PureComponent<StateProps & DispatchProps> {
  fetchData = () => {
    if (this.props.searchQuery) {
      return axios.get(`${GITHUB_API}?q=${this.props.searchQuery}&page=${this.props.nextPage}`)
        .then(res => {
          this.props.appendSearchResults({
            nextSearchResults: res.data.items,
            totalResultsLength: res.data.total_count,
          })
        })
    }
  }

  hasMore = (): boolean => {
    if (this.props.searchQuery && !this.props.totalResultsLength) return true
    return this.props.totalResultsLength > this.props.searchResults.length
  }

  render() {
    const props = {
      ...this.props,
      fetchData: this.fetchData,
      hasMore: this.hasMore(),
    }
  
    return <SearchResults {...props} />
  }
}

// grab the entire state
const mapStateToProps = (state: State): StateProps => ({ ...state })

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  appendSearchResults: (data: AppendedSearchResults) => dispatch(appendSearchResults(data))
})

// @todo any
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultsContainer as any)
