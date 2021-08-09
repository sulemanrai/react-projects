import React, { useEffect, useRef, useState } from 'react'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

async function fetchResponse() {
  const response = await fetch(url)
  // waits until the request completes...
  const data = await response.json()
  return data
}

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeID, setActiveId] = useState('')
  const inputEl = useRef(null)

  const onButtonClick = (id) => {
    setActiveId(id)
    Array.prototype.forEach.call(inputEl.current.children, (child) => {
      if (child.id === id) {
        child.classList.add('active-btn')
        child.classList.remove('false')
      } else {
        child.classList.add('false')
        child.classList.remove('active-btn')
      }
    })
  }

  const renderDescription = (id) => {
    //console.log('active id is' + id)
    return data
      .filter((item) => {
        return item.id === id
      })
      .map((item) => {
        const { title, id, company, dates, duties } = item
        return (
          <article className='job-info' key={id}>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className='job-date'>{dates}</p>
            {duties.map((duty, index) => {
              return (
                <div className='job-desc' key={index}>
                  <svg
                    stroke='currentColor'
                    fill='currentColor'
                    strokeWidth='0'
                    viewBox='0 0 448 512'
                    className='job-icon'
                    height='1em'
                    width='1em'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z'></path>
                  </svg>
                  {duty}
                </div>
              )
            })}
          </article>
        )
      })
  }

  useEffect(() => {
    fetchResponse()
      .then((response) => {
        setData(response)
        setActiveId(response[0].id)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return loading ? (
    <section className='section loading'>
      <h1>Loading...</h1>
    </section>
  ) : (
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        <div className='btn-container' ref={inputEl}>
          {data.map((btn, index) => {
            const { id, company } = btn
            return (
              <button
                key={id}
                className={`job-btn ${index === 0 ? 'active-btn' : 'false'}`}
                onClick={() => onButtonClick(id)}
                id={id}
              >
                {company}
              </button>
            )
          })}
        </div>
        {renderDescription(activeID)}
      </div>

      <button type='button' className='btn'>
        more info
      </button>
    </section>
  )
}

export default App
