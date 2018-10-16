import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import ListItem from './ListItem'

const Loading = () => <p>Loading...</p>
const EndOfResults = () => <p>End of Results.</p>

interface SearchResultsProps {
  searchResults: any[];
  noResults: boolean;
  hasMore: boolean;
  fetchData: () => void;
}

const SearchResults: React.SFC<SearchResultsProps> = (props) => {
  if (props.noResults) return <p>No Search Results.</p>
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={props.fetchData}
      hasMore={props.hasMore}
      loader={props.searchResults.length ? <Loading /> : null}
      style={{ marginTop: '20px' }}
    >
      {
        props.searchResults.map(
          (result, index) =>
            <ListItem
              key={index}
              avatarUrl={result.owner.avatar_url}
              name={result.full_name}
              description={result.description}
              stars={result.stargazers_count}
            />
        )
      }
    </InfiniteScroll>
  )
}

export default SearchResults
