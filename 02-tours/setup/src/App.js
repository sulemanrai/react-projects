import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  async function fetchTours() {
    const response = await fetch(url)
    const tours = response.json()
    return tours
  }

  const notInterested = (id) => {
    const filteredItems = data.filter((tour) => tour.id !== id)
    setData(filteredItems)
  }

  const referesh = () => {
    setLoading(true)
    fetchTours()
      .then((tours) => {
        setData(tours)
      })
      .catch((e) => {
        throw new Error(e)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchTours()
      .then((tours) => {
        setData(tours)
      })
      .catch((e) => {
        throw new Error(e)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Loading />
  }
  if (data.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={() => referesh()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours tours={data} notInterested={notInterested} />
    </main>
  )
}

export default App
