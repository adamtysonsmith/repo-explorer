import React from 'react'
import styled from 'styled-components'
import InfiniteScroll from 'react-infinite-scroller'
import { PropagateLoader } from 'react-spinners'
import ListItem from './ListItem'

const Message = styled.p`
  font-family: Roboto;
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
`

const ResultCount = styled(Message)`
  font-size: 10px;
  margin-bottom: 0px;
`

const LoadingContainer = styled.div`
  width: 0px;
  margin: 10px auto;
  margin-bottom: 50px;
`

const Loading = () =>
  <LoadingContainer>
    <PropagateLoader color="gray" />
  </LoadingContainer>

const NoResults = () => <Message>🙁 No Search Results.</Message>

interface SearchResultsProps {
  totalResultsLength: number;
  searchResults: any[];
  noResults: boolean;
  hasMore: boolean;
  fetchData: () => void;
}

const SearchResults: React.SFC<SearchResultsProps> = (props) =>
  <div>
    {
      !!props.totalResultsLength
      && <ResultCount>{props.totalResultsLength} Results</ResultCount>
    }
    {
      props.noResults
      ? <NoResults />
      : <InfiniteScroll
          pageStart={0}
          loadMore={props.fetchData}
          hasMore={props.hasMore}
          loader={props.searchResults.length ? <Loading /> : null}
        >
          {
            props.searchResults.map(
              (result, index) =>
                <ListItem
                  key={index}
                  avatarUrl={result.owner.avatar_url}
                  name={result.full_name}
                  description={result.description}
                  language={result.language}
                  stars={result.stargazers_count}
                  owner={result.owner.login}
                />
            )
          }
        </InfiniteScroll>
    }
  </div>

export default SearchResults
