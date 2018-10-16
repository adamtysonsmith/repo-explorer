import React from 'react'
import { Dispatch, AnyAction } from 'redux'
import { connect } from 'react-redux'
import { setSearchQuery, resetAll } from '../state/actions'
import SearchBar from '../components/SearchBar'
import { State } from '../state/reducer'

interface StateProps {
  searchQuery: string;
}

interface DispatchProps {
  setSearchQuery: (searchQuery: string) => void;
  resetAll: () => void;
}

interface SearchBarState {
  inputValue: string;
  isSortedByRelevance: boolean;
  isSortedByStars: boolean;
}

class SearchBarContainer extends React.PureComponent<StateProps & DispatchProps, SearchBarState> {
  state = {
    inputValue: '',
    isSortedByRelevance: true,
    isSortedByStars: false,
  }

  setInputValue = (evt: React.FormEvent<HTMLInputElement>) => {
    // reset search query when input changes
    // @todo debounce the reset 
    this.setState({ inputValue: evt.currentTarget.value }, this.props.resetAll)
  }

  search = () => this.props.setSearchQuery(this.state.inputValue)

  sortByRelevance = () => this.setState({ isSortedByRelevance: true, isSortedByStars: false })
  
  sortByStars = () => this.setState({ isSortedByRelevance: false, isSortedByStars: true })

  render() {
    const props = {
      setInputValue: this.setInputValue,
      search: this.search,
      sortByRelevance: this.sortByRelevance,
      sortByStars: this.sortByStars,
      isSortedByRelevance: this.state.isSortedByRelevance,
      isSortedByStars: this.state.isSortedByStars,
    }
  
    return <SearchBar {...props} />
  }
}

const mapStateToProps = (state: State): StateProps => ({
  searchQuery: state.searchQuery
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setSearchQuery: (searchQuery: string) => dispatch(setSearchQuery(searchQuery)),
  resetAll: () => dispatch(resetAll()),
});

// @todo any
export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer as any)
