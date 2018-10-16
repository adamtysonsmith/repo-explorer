import React from 'react'
import styled, { StyledFunction } from 'styled-components'
import Button, { ButtonProps } from './Button'

interface SegmentButtonProps extends ButtonProps {
  selected: boolean;
}

const button: StyledFunction<SegmentButtonProps> = styled(Button)

const SegmentButton = button`
  width: 105px;
  background-color: ${props => props.selected ? 'black' : 'white'};
  color: ${props => props.selected ? 'white' : 'black'};
`

interface SortControlProps {
  sortByRelevance: () => void;
  sortByStars: () => void;
  isSortedByRelevance: boolean;
  isSortedByStars: boolean;
}

const SortControl = (props) =>
  <div style={{ display: 'inline-block', marginLeft: '25px' }}>
    <SegmentButton onClick={props.sortByRelevance} selected={props.isSortedByRelevance}>Relevance</SegmentButton>
    <SegmentButton onClick={props.sortByStars} selected={props.isSortedByStars}>Stars</SegmentButton>
  </div>

export default SortControl
