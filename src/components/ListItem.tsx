import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border-bottom: 2px solid #b3b3b3;
  padding: 10px;
  margin: 5px;
`

const SmallP = styled.p`
  font-size: 12px;
  margin: 0px;
`

interface ListItemProps {
  avatarUrl: string;
  name: string;
  description: string;
  stars: number;
}

// @todo styling on em
const ListItem: React.SFC<ListItemProps> = (props) => 
  <Container>
    <img src={props.avatarUrl} width={40} style={{ verticalAlign: 'top' }} />
    <div style={{ display: 'inline-block', marginLeft: '10px', maxWidth: '400px' }}>
      <SmallP>https://github.com/{props.name}</SmallP>
      <SmallP>{props.description || 'No description.'}</SmallP>
    </div>
    <SmallP style={{ display: 'inline-block', textAlign: 'right', verticalAlign: 'top' }}>⭐ {props.stars}</SmallP>
  </Container>

export default ListItem
