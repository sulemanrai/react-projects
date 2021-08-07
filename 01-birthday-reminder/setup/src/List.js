import React from 'react'

const List = ({ image, name, age, id }) => {
  return (
    <article className='person' key={id}>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  )
}

export default List
