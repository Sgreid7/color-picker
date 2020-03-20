import React, { Component } from 'react'
import styled from 'styled-components'

export const InputSection = ({ name, type, className, value, onChange }) => {
  return (
    <Div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        value={value}
        className={className}
        onChange={onChange}
      />
    </Div>
  )
}

export default InputSection

const Div = styled.div`
  display: flex;
  justify-content: center;
  label {
    text-transform: capitalize;
  }
`
