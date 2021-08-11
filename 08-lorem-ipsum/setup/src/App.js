import React, { useState } from 'react'
import data from './data'
function App() {
  const [inputValue, setInputValue] = useState(2)
  const [paras, setParas] = useState(inputValue)
  const generateLoremIpsum = (e) => {
    e.preventDefault()
    const inputVal = document.getElementById('amount')
    setParas(inputVal.value)
  }

  const returnArticles = (value) => {
    console.log(value)
    const articles = data
      .map((item, index) => {
        return <p key={index}>{item}</p>
      })
      .filter((item) => {
        return item.key < value
      })
    return articles
  }

  return (
    <>
      <section className='section-center'>
        <h3>TIRED OF BORING LOREM IPSUM?</h3>
        <form className='lorem-form'>
          <label htmlFor='amount'>paragraphs:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={inputValue}
            min='1'
            max='9'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className='btn' onClick={(e) => generateLoremIpsum(e)}>
            generate
          </button>
        </form>

        {returnArticles(paras)}
      </section>
    </>
  )
}

export default App
