import React from 'react'
import * as C from './styles.js' 

function Button({onClick}) {
  return (
    <C.ButtonContainer onClick={onClick}>
        BUSCAR
    </C.ButtonContainer>
  )
}

export default Button