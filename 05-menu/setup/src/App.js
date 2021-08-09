import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

function App() {
  let catogries = items.map((item) => {
    return item.category
  })

  const newCatogries = ['All', ...new Set(catogries)]
  const [category, setCategory] = useState('All')
  const updateCategory = (category) => {
    setCategory(category)
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <Menu />
          <div className='underline'></div>
        </div>
        <div className='btn-container'>
          {newCatogries.map((category) => {
            return (
              <button
                type='button'
                className='filter-btn'
                key={category}
                onClick={() => updateCategory(category)}
              >
                {category}
              </button>
            )
          })}
        </div>
        <div className='section-center'>
          <Categories items={items} activeCateogry={category} />
        </div>
      </section>
    </main>
  )
}

export default App
