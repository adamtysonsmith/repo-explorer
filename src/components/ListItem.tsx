import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: white;
  border-bottom: 2px solid #b3b3b3;
  padding: 10px;
  margin: 5px;
`

const TextContainer = styled.div`
  display: inline-block;
  max-width: 400px;
  margin-left: 10px;
`

const StarContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  float: right;
`

const Text = styled.p`
  font-family: Roboto;
  font-size: 11px;
  margin: 0px;
`

const StarText = styled(Text)`
  font-size: 12px;
  font-weight: bold;
`

interface ListItemProps {
  avatarUrl: string;
  name: string;
  description: string;
  stars: number;
}

const ListItem: React.SFC<ListItemProps> = (props) => 
  <Container>
    <img src={props.avatarUrl} width={40} style={{ verticalAlign: 'top' }} />
    <TextContainer>
      <Text>
        <a href={`https://github.com/${props.name}`}>https://github.com/${props.name}</a>
      </Text>
      <Text>{props.description || 'No description.'}</Text>
    </TextContainer>
    <StarContainer>
      <StarText>⭐ {props.stars}</StarText>
    </StarContainer>
  </Container>

export default ListItem
