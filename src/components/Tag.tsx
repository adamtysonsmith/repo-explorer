import React from 'react'
import styled from 'styled-components'

const colorMap = {
  'javascript': 'DarkOrchid',
  'typescript': 'Navy',
  'python': 'MediumSlateBlue',
  'ruby': 'Crimson',
  'objective-c': 'Red',
  'go': 'Teal',
  'erlang': 'Indigo',
  'elixir': 'Indigo',
  'shell': 'Black',
  'html': 'DodgerBlue',
  'swift': 'OrangeRed',
  'php': 'MediumSlateBlue',
  'java': 'Gray',
  'haskell': 'DodgerBlue',
  'kotlin': 'Green',
  'elm': 'DarkOrange',
  'c': 'Black',
  'c#': 'OrangeRed',
  'c++': 'Maroon',
  'perl': 'DarkOrange',
  'clojure': 'Olive',
  'css': 'Magenta',
}

const getColor = (lang?: string) => {
  if (lang) {
    const color = colorMap[lang.toLowerCase()]
    return color || 'DarkCyan'
  }
  return 'DarkCyan'
}

const Tag = styled.p`
  display: inline-block;
  margin: 5px 0px 0px 0px;
  background-color: ${props => getColor(props.lang)};
  padding: 5px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 8px;
  font-family: Helvetica;
  color: white;
`

export default Tag
