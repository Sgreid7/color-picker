import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import InputSection from './components/InputSection'

class App extends Component {
  onRand = () => Math.floor(Math.random() * 255 + 1)
  state = {
    hue: this.onRand(),
    saturation: this.onRand(),
    lightness: this.onRand(),
  }

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

  onRandomColor = () => {
    this.setState({
      hue: this.onRand(),
      saturation: this.onRand(),
      lightness: this.onRand(),
    })
  }

  render() {
    return (
      <>
        <section className="color">
          <h2>A fantastic HSL Color Picker tailored to your liking</h2>
          <p>Select a color using the hue, saturation, and lighting sliders</p>
        </section>
        <SlidersSection isOpen={false} className="sliders">
          <InputSection
            name="hue"
            type="range"
            className="slider"
            value={this.state.hue}
            onChange={this.onHueChange}
          />
          <InputSection
            name="saturation"
            type="range"
            className="slider"
            value={this.state.saturation}
            onChange={this.onSaturationChange}
          />
          <InputSection
            name="lightness"
            type="range"
            className="slider"
            value={this.state.lightness}
            onChange={this.onLightnessChange}
          />
        </SlidersSection>
        <ColorBox
          hue={this.state.hue}
          saturation={this.state.saturation}
          lightness={this.state.lightness}
        />

        <span>
          {this.state.hue}
          {this.state.saturation}
          {this.state.lightness}
        </span>
        <button onClick={this.onRandomColor}>RANDOM</button>
      </>
    )
  }
}

App.propTypes = {
  title: PropTypes.string,
}

export default App
const SlidersSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${({ isOpen }) => (isOpen ? 'blue' : 'red')};

  label {
    color: green;
  }
`
const ColorBox = styled.section`
  height: 350px;
  width: 350px;
  background-color: ${({ hue, saturation, lightness }) =>
    `hsl(${hue}, ${saturation}%, ${lightness}%)`};
`
