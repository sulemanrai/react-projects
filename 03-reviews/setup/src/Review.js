import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(1)
  const [Person] = people.filter((person) => {
    return person.id === index
  })

  const { id, name, job, image, text } = Person

  const clickLeft = () => {
    let newIndex = index
    index === 1 ? (newIndex = people.length) : newIndex--
    setIndex(newIndex)
  }

  const clickRight = () => {
    let newIndex = index
    index === people.length ? (newIndex = 1) : newIndex++
    setIndex(newIndex)
  }

  const surpriseMe = () => {
    let randomNum = index
    function displayName() {
      let random = randomNum
      while (true) {
        random = Math.floor(Math.random() * people.length) + 1
        if (random !== randomNum) break
      }
      return random
    }
    randomNum = displayName()
    setIndex(randomNum)
  }

  return (
    <article className='review' key={id}>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft onClick={clickLeft} />
        </button>
        <button className='next-btn'>
          <FaChevronRight onClick={clickRight} />
        </button>
      </div>
      <button className='random-btn' onClick={surpriseMe}>
        surprise me
      </button>
    </article>
  )
}

export default Review
