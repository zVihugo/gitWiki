/* eslint-disable no-unused-vars */
import React from 'react'
import {ButtonContainer} from './styles'


const Button = ({onClick}) => {
  return (
    <ButtonContainer onClick={onClick}>
        Buscar
    </ButtonContainer>
  )
}

export default Button