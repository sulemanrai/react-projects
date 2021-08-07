import React from 'react'
import Tour from './Tour'
const Tours = ({ tours, notInterested }) => {
  console.log(tours)
  return (
    <>
      <div className='title'>
        <h2>Our Tours</h2>
        <div className='underline'></div>
      </div>
      {tours.map((tour) => {
        //console.log(tour)
        return <Tour tour={tour} key={tour.id} notInterested={notInterested} />
      })}
    </>
  )
}

export default Tours
