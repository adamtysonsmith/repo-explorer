import React from 'react'
import { Dispatch, AnyAction } from 'redux'
import { connect } from 'react-redux'
import debounce from 'lodash.debounce'
import { setSearchQuery, sortBy, resetAll } from '../state/actions'
import SearchBar from '../components/SearchBar'
import { State, Sort } from '../state/types'

interface StateProps {
  searchQuery: string;
  sort: Sort;
}

interface DispatchProps {
  setSearchQuery: (searchQuery: string) => void;
  sortBy: (sort: Sort) => void;
  resetAll: () => void;
}

interface SearchBarState {
  inputValue: string;
}

class SearchBarContainer extends React.PureComponent<StateProps & DispatchProps, SearchBarState> {
  state = {
    inputValue: '',
  }

  setInputValue = (evt: React.FormEvent<HTMLInputElement>) => {
    // reset search query when input changes
    this.setState({ inputValue: evt.currentTarget.value })
    this.props.resetAll()
  }

  search = () => this.props.setSearchQuery(this.state.inputValue)

  sortBy = (sort: Sort) => this.props.sortBy(sort)
  
  render() {
    const props = {
      setInputValue: this.setInputValue,
      search: this.search,
      sortBy: this.sortBy,
      sort: this.props.sort,
    }
  
    return <SearchBar {...props} />
  }
}

const mapStateToProps = (state: State): StateProps => ({
  searchQuery: state.searchQuery,
  sort: state.sort,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  setSearchQuery: (searchQuery: string) => dispatch(setSearchQuery(searchQuery)),
  sortBy: (sort: Sort) => dispatch(sortBy(sort)),
  resetAll: debounce(() => dispatch(resetAll()), 500),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer as any)
