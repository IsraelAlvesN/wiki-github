import React from 'react'
import * as C from './styles.js' 

function Input({value, onChange}) {
  return (
    <C.InputContainer>
        <input value={value} onChange={onChange}/>
    </C.InputContainer>
  )
}

export default Input