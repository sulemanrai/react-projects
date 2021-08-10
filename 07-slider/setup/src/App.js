import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import data from './data'
function App() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [lastSlide, setLastSlide] = useState(data.length - 1)

  const sectionContainer = useRef(null)

  const returnSlidePos = (index) => {
    if (index === 0) {
      return 'activeSlide'
    } else if (index === data.length - 1) {
      return 'lastSlide'
    } else {
      return 'nextSlide'
    }
  }

  const returnIndex = (index) => {
    if (index < 0) {
      return data.length - 1
    } else if (index > data.length - 1) {
      return 0
    } else return index
  }

  const handleChildren = useCallback(
    (direction) => {
      let container = sectionContainer.current
      let children = Array.from(container.children)
      if (direction === 'forward') {
        children.forEach(() => {
          if (activeSlide === 0 && lastSlide === data.length - 1) {
            children[0].className = 'lastSlide'
            children[1].className = 'activeSlide'
            children[data.length - 1].className = 'nextSlide'
            setActiveSlide(returnIndex(activeSlide + 1))
            setLastSlide(0)
          } else if (activeSlide !== 0 && lastSlide === activeSlide - 1) {
            children[returnIndex(activeSlide + 1)].className = 'activeSlide'
            children[returnIndex(lastSlide + 1)].className = 'lastSlide'
            children[returnIndex(lastSlide)].className = 'nextSlide'
            setActiveSlide(returnIndex(activeSlide + 1))
            setLastSlide(returnIndex(lastSlide + 1))
          }
        })
      } else if (direction === 'backward') {
        children.forEach(() => {
          if (activeSlide === 0 && lastSlide === data.length - 1) {
            children[0].className = 'nextSlide'
            children[returnIndex(data.length - 2)].className = 'lastSlide'
            children[returnIndex(data.length - 1)].className = 'activeSlide'
            setActiveSlide(returnIndex(data.length - 1))
            setLastSlide(returnIndex(data.length - 2))
          } else if (activeSlide !== 0 && lastSlide === activeSlide - 1) {
            children[returnIndex(activeSlide - 1)].className = 'activeSlide'
            children[returnIndex(lastSlide - 1)].className = 'lastSlide'
            children[returnIndex(activeSlide)].className = 'nextSlide'
            setActiveSlide(returnIndex(activeSlide - 1))
            setLastSlide(returnIndex(lastSlide - 1))
          }
        })
      }
    },
    [activeSlide, lastSlide]
  )

  const clickLeft = () => {
    handleChildren('backward')
  }

  const clickRight = () => {
    handleChildren('forward')
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleChildren('forward')
    }, 5000)
    return () => clearInterval(interval)
  }, [activeSlide, lastSlide, handleChildren])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className='section-center' ref={sectionContainer}>
        {data.map((slide, index) => {
          const { image, name, title, quote, id } = slide
          return (
            <article className={returnSlidePos(index)} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
              <button
                className='prev'
                onClick={() => clickLeft(returnIndex(index - 1))}
              >
                <FiChevronLeft />
              </button>
              <button className='next'>
                <FiChevronRight
                  onClick={() => clickRight(returnIndex(index + 1))}
                />
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default App
