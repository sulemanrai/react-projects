import React, { useState } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [r, g, b] = rgb
  const [alert, setAlert] = useState(false)
  function copy() {
    var copyText = document.getElementById(index).children[1].innerText
    navigator.clipboard.writeText(copyText)
    setAlert(true)
    setTimeout(function () {
      setAlert(false)
    }, 2000)
  }
  return (
    <>
      <article
        id={index}
        className={`color ${
          weight >= 0 && index >= 8 ? 'color-light' : 'false'
        }`}
        style={{ backgroundColor: `${rgbToHex(r, g, b)}` }}
        onClick={(index) => copy(index)}
      >
        <p className='percent-value'>{weight}</p>
        <p className='color-value'>{rgbToHex(r, g, b)}</p>
        {alert && <p className='alert'>copied to clipboard</p>}
      </article>
    </>
  )
}

export default SingleColor
