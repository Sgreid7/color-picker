import React, { Component } from 'react'
import styled from 'styled-components'

export const InputSection = ({
  name,
  type,
  className,
  min,
  max,
  step,
  value,
  onChange,
}) => {
  return (
    <Div>
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        value={value}
        className={className}
        min={min}
        max={max}
        step={step}
        onChange={onChange}
      />
    </Div>
  )
}

export default InputSection

const Div = styled.div`
  display: flex;

  label {
    color: #fff;
    margin: 0.5rem;
    text-transform: capitalize;
  }

  input {
    margin: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
