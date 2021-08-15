import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ id, title, onEditItemBtn, onDeleteBtn }) => {
  return (
    <article className='grocery-item'>
      <p className='title'>{title}</p>
      <div className='btn-container'>
        <button
          type='button'
          className='edit-btn'
          onClick={() => onEditItemBtn(id)}
        >
          <FaEdit />
        </button>
        <button
          type='button'
          className='delete-btn'
          onClick={() => onDeleteBtn(id)}
        >
          <FaTrash />
        </button>
      </div>
    </article>
  )
}

export default List
