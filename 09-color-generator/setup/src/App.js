import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('#f15025')
  const [colors, setColors] = useState([])
  const submitForm = (e) => {
    e.preventDefault()
    const Color = new Values(color)
    setColors(Color.all())
  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form>
          <input
            type='text'
            placeholder='#f15025'
            className='null'
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
          <button type='submit' className='btn' onClick={(e) => submitForm(e)}>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {colors.map((color, index) => {
          const { rgb, weight } = color
          return (
            <SingleColor rgb={rgb} weight={weight} index={index} key={index} />
          )
        })}
      </section>
    </>
  )
}

export default App
