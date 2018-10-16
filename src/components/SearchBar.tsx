import React from 'react'
import styled from 'styled-components'
import SearchButton from './Button'
import SortControl from './SortControl'

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
  sortByRelevance: () => void;
  sortByStars: () => void;
  isSortedByRelevance: boolean;
  isSortedByStars: boolean;
}

// @todo remove inline styles

const SearchBar: React.SFC<SearchBarProps> = (props) =>
  <div style={{ width: '535px', margin: '0 auto' }}>
    <Input type="text" onChange={props.setInputValue} />
    <SearchButton onClick={props.search}>Search</SearchButton>
    <SortControl
      sortByRelevance={props.sortByRelevance}
      sortByStars={props.sortByStars}
      isSortedByRelevance={props.isSortedByRelevance}
      isSortedByStars={props.isSortedByStars}
    />
  </div>

export default SearchBar
