import React from 'react'
import styled, { StyledFunction } from 'styled-components'

export interface ButtonProps {
  backgroundColor?: string;
  onClick: () => void;
}

const button: StyledFunction<ButtonProps> = styled.button

const Button = button`
  background-color: ${(props) => props.backgroundColor || 'black'};
  color: white;
  border: none;
  padding: 10px 20px;
  min-height: 34px;
  text-transform: uppercase;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`

export default Button
