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
    font-size: 1.5rem;
    text-shadow: 0.1rem 0.1rem 0.1rem #03dffc;
  }

  input {
    margin: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type='range'] {
    -webkit-appearance: none;
    width: 100%;
    background: transparent;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input[type='range']:focus {
    outline: none;
  }

  input[type='range']::-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 0.1rem solid #000000;
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    margin-top: -0.05rem;
    box-shadow: 0.1rem 0.1rem 0.1rem #000000, 0 0 0.2rem #0d0d0d;
  }

  input[type='range']::-webkit-slider-runnable-track {
    width: 100%;
    height: 1rem;
    cursor: pointer;
    box-shadow: 0.1rem 0.1rem 0.1rem #000000, 0 0 0.2rem #0d0d0d;
    background: linear-gradient(red, yellow, lime, aqua, blue, magenta, red);
    border-radius: 0.25rem;
    border: 0.02rem solid #010101;
  }

  input[type='range']:focus::-webkit-slider-runnable-track {
    background: linear-gradient(red, yellow, lime, aqua, blue, magenta, red);
  }
`
