import React from 'react'
import styled from 'styled-components'
import SearchButton from './Button'
import SortControl from './SortControl'
import { Sort } from '../state/types'

const Input = styled.input`
  text-align: left;
  vertical-align: bottom;
  width: 200px;
  height: 28px;
  border: 2px solid black;
  color: black;
  font-size: 16px;
  padding-left: 8px;
  &:focus {
    outline: none;
  }
`

interface SearchBarProps {
  search: () => void;
  setInputValue: (val: any) => void;
  sortBy: (sort: Sort) => void;
  sort: Sort;
}

// @todo remove inline styles
const SearchBar: React.SFC<SearchBarProps> = (props) =>
  <div style={{ width: '535px', margin: '0 auto' }}>
    <Input type="text" onChange={props.setInputValue} />
    <SearchButton onClick={props.search}>Search</SearchButton>
    <SortControl
      sortByRelevance={() => props.sortBy('relevance')}
      sortByStars={() => props.sortBy('stars')}
      sort={props.sort}
    />
  </div>

export default SearchBar
