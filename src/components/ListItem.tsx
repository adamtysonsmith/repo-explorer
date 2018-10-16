import React from 'react'
import styled from 'styled-components'
import Tag from './Tag'

const Container = styled.div`
  background-color: white;
  border-bottom: 2px solid #b3b3b3;
  padding: 10px;
  margin: 5px;
`

const TextContainer = styled.div`
  display: inline-block;
  max-width: 600px;
  margin-left: 10px;
`

const StarContainer = styled.div`
  display: inline-block;
  vertical-align: top;
  float: right;
`

const Text = styled.p`
  font-family: Roboto;
  font-size: 14px;
  margin: 0px;
`

const StarText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
`

interface ListItemProps {
  avatarUrl: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  owner: string;
}

const formatDesc = (desc: string) => {
  if (desc && desc.length) {
    return desc.length > 140 ? desc.slice(0, 160) + '...' : desc
  }

  return 'No description.'
}

const ListItem: React.SFC<ListItemProps> = (props) => 
  <Container>
    <img src={props.avatarUrl} width={80} style={{ verticalAlign: 'top' }} />
    <TextContainer>
      <Text>
        <a href={`https://github.com/${props.name}`}>https://github.com/${props.name}</a> by {props.owner}
      </Text>
      <Text>{formatDesc(props.description)}</Text>
      <Tag lang={props.language}>{props.language || 'Unknown'}</Tag>
    </TextContainer>
    <StarContainer>
      <StarText>⭐ {props.stars}</StarText>
    </StarContainer>
  </Container>

export default ListItem
