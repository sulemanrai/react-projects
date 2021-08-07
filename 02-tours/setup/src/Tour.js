import React, { useState } from 'react'

const Tour = ({ tour, notInterested }) => {
  // console.log('my tours are' + tour)
  const { id, image, name, info, price } = tour

  const [readMore, setReadMore] = useState(true)

  const showMore = () => {
    setReadMore(!readMore)
  }

  const renderInfo = (info, readMore) => {
    if (readMore) {
      return (
        <p>
          {info.substring(0, 150)}...
          <button onClick={showMore}>Read More</button>
        </p>
      )
    }

    return (
      <p>
        {info} <button onClick={showMore}>Read Less</button>
      </p>
    )
  }

  return (
    <>
      <div key={id}>
        <article className='single-tour'>
          <img src={image} alt={name} />
          <footer>
            <div className='tour-info'>
              <h4>{name}</h4>
              <h4 className='tour-price'>{price}</h4>
            </div>
            {renderInfo(info, readMore)}
            <button className='delete-btn' onClick={() => notInterested(id)}>
              not interested
            </button>
          </footer>
        </article>
      </div>
    </>
  )
}

export default Tour
