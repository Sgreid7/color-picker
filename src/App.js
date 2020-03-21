import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import InputSection from './components/InputSection'

class App extends Component {
  // MATH FUNCTIONS
  onRandHue = () => Math.floor(Math.random() * 360)
  onRandPercent = () => Math.floor(Math.random() * 100)
  onRandAlpha = () => Math.random().toFixed(2)

  // STATE
  state = {
    hue: this.onRandHue(),
    saturation: this.onRandPercent(),
    lightness: this.onRandPercent(),
    alpha: this.onRandAlpha(),
  }

  // HSLA CHANGE FUNCTIONS
  onHueChange = event => {
    return this.setState({
      hue: event.target.value,
    })
  }

  onSaturationChange = event => {
    return this.setState({
      saturation: event.target.value,
    })
  }

  onLightnessChange = event => {
    return this.setState({
      lightness: event.target.value,
    })
  }

  onAlphaChange = event => {
    return this.setState({
      alpha: event.target.value,
    })
  }

  // GENERATE RANDOM COLOR
  onRandomColor = () => {
    this.setState({
      hue: this.onRandHue(),
      saturation: this.onRandPercent(),
      lightness: this.onRandPercent(),
      alpha: this.onRandAlpha(),
    })
  }

  render() {
    return (
      <>
        <Header className="color">
          <h2>A customizable HSL color selector</h2>
          <p>
            Select a color using the hue, saturation, lightness, and alpha
            sliders
          </p>
        </Header>
        <SlidersSection isOpen={false} className="sliders">
          <InputSection
            name="h"
            type="range"
            className="slider"
            min="0"
            max="360"
            value={this.state.hue}
            onChange={this.onHueChange}
          />
          <InputSection
            name="s"
            type="range"
            className="slider"
            min="0"
            max="100"
            value={this.state.saturation}
            onChange={this.onSaturationChange}
          />
          <InputSection
            name="l"
            type="range"
            className="slider"
            min="0"
            max="100"
            value={this.state.lightness}
            onChange={this.onLightnessChange}
          />
          <InputSection
            name="a"
            type="range"
            className="slider"
            min="0"
            max="1"
            step="0.01"
            value={this.state.alpha}
            onChange={this.onAlphaChange}
          />
          <RandomButton onClick={this.onRandomColor}>RANDOM</RandomButton>
        </SlidersSection>
        <P>COLOR</P>
        <ColorBox
          hue={this.state.hue}
          saturation={this.state.saturation}
          lightness={this.state.lightness}
          alpha={this.state.alpha}
        />

        <P>
          hsla(
          {this.state.hue}, {this.state.saturation}%, {this.state.lightness}%,{' '}
          {this.state.alpha})
        </P>
      </>
    )
  }
}

App.propTypes = {
  title: PropTypes.string,
}

export default App
const Header = styled.section`
  font-size: 1.5rem;
  text-align: center;
  font-style: italic;

  h2 {
    color: #fff;
    text-shadow: 0.1rem 0.1rem 0.1rem #03dffc;
  }

  p {
    color: #fff;
    text-shadow: 0.07rem 0.07rem 0.07rem #03dffc;
  }
`

const SlidersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  /* background-color: ${({ isOpen }) => (isOpen ? 'blue' : 'red')}; */
`
const ColorBox = styled.section`
  height: 5rem;
  width: 16rem;
  border: 0.5rem solid #000;
  margin: 0 auto;
  background-color: ${({ hue, saturation, lightness, alpha }) =>
    `hsl(${hue}, ${saturation}%, ${lightness}%, ${alpha})`};
`
const P = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem;
  color: #fff;
  text-shadow: 0.04rem 0.04rem 0.04rem #03dffc;
`

const RandomButton = styled.button`
  padding: 1rem;
  width: 20vw;
  margin: 1rem;
  border: 0.15rem solid #fff;
  letter-spacing: 0.2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  -moz-box-shadow: inset 0 0 0.8rem #03dffc;
  -webkit-box-shadow: inset 0 0 0.8rem #03dffc;
  box-shadow: inset 0 0 0.8rem #03dffc;
  transition: 0.3s ease;

  :hover {
    cursor: pointer;
    transform: translateY(-0.7rem);
    border-radius: 2rem;
    box-shadow: 0 0.2rem 0.2rem #03dffc;
  }
  :focus {
    outline: none;
  }
`
