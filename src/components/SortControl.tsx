import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import Button, { ButtonProps } from './Button'
import { Sort } from '../state/types'

interface SegmentButtonProps extends ButtonProps {
  selected: boolean;
}

const button: StyledFunction<SegmentButtonProps> = styled(Button)

const SegmentContainer = styled.div`
  display: inline-block;
  margin-left: 25px;
`

const SegmentButton = button`
  width: 105px;
  background-color: ${props => props.selected ? 'black' : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
`

interface SortControlProps {
  sortByRelevance: () => void;
  sortByStars: () => void;
  sort: Sort;
}

const SortControl: React.SFC<SortControlProps> = (props) =>
  <SegmentContainer>
    <SegmentButton onClick={props.sortByRelevance} selected={props.sort === 'relevance'}>
      Relevance
    </SegmentButton>
    <SegmentButton onClick={props.sortByStars} selected={props.sort === 'stars'}>
      Stars
    </SegmentButton>
  </SegmentContainer>

export default SortControl
