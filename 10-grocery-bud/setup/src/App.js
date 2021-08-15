import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  var groceryItem = {
    id: '',
    title: '',
  }
  const [item, setItem] = useState(groceryItem)
  const [list, setList] = useState([])
  const [mode, setMode] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    const btn = document.getElementById('submit-btn')
    const classList = btn.className
    if (classList.includes('submit-mode')) {
      setMode('submit-mode')
      list.push(item)
      setList(list)
      setItem(groceryItem)
      localStorage.setItem('list', JSON.stringify(list))
    } else if (classList.includes('edit-mode')) {
      setMode('edit-mode')
      const newList = list.map((listitem) => {
        if (listitem.id === item.id) {
          listitem.title = item.title
        }
        return listitem
      })

      setList(newList)
      localStorage.setItem('list', JSON.stringify(newList))

      document.getElementById('submit-btn').innerText = 'Submit'
      btn.classList.remove('edit-mode')
      btn.classList.add('submit-mode')
    }
  }

  const clearItems = () => {
    setMode('empty-list-mode')
    setList([])
    localStorage.setItem('list', JSON.stringify([]))
  }

  const updateItem = (e) => {
    const btn = document.getElementById('submit-btn')
    const classList = btn.className
    if (classList.includes('submit-mode')) {
      setItem({
        id: new Date().getTime(),
        title: e.target.value,
      })
    } else if (classList.includes('edit-mode')) {
      setItem({
        id: item.id,
        title: e.target.value,
      })
    }
  }

  const onEditItemBtn = (id) => {
    const [obj] = list.filter((item) => {
      return item.id === id
    })

    document.getElementById('submit-btn').innerText = 'Edit'
    groceryItem.id = obj.id
    groceryItem.title = obj.title
    setItem(groceryItem)
    const btn = document.getElementById('submit-btn')
    const classList = btn.className
    if (classList.includes('submit-mode')) {
      btn.classList.remove('submit-mode')
      btn.classList.add('edit-mode')
    }
  }

  const onDeleteBtn = (id) => {
    const newList = list.filter((item) => {
      return item.id !== id
    })
    setMode('delete-mode')
    setList(newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }

  useEffect(() => {
    if (localStorage.getItem('list') !== null) {
      setList(JSON.parse([localStorage.getItem('list')]))
    }
    const timeout = window.setTimeout(() => {
      setMode('')
    }, 3000)
    return () => {
      window.clearTimeout(timeout)
    }
  }, [mode])

  return (
    <section className='section-center'>
      <Alert flag={mode} />
      <form className='grocery-form'>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            id='input'
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={item.title}
            onChange={(e) => updateItem(e)}
          />
          <button
            id='submit-btn'
            type='submit'
            className='submit-btn submit-mode'
            onClick={(e) => submitForm(e)}
          >
            submit
          </button>
        </div>
      </form>
      <div className='grocery-list'>
        <div className='grocery-container'>
          {list &&
            list.map((item) => {
              return (
                <List
                  key={item.id}
                  {...item}
                  onEditItemBtn={onEditItemBtn}
                  onDeleteBtn={onDeleteBtn}
                />
              )
            })}
          {list.length > 0 && (
            <button className='clear-btn' onClick={clearItems}>
              clear items
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export default App
