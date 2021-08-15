import React from 'react'

const Alert = ({ flag }) => {
  var activeClass = ''
  var message = ''

  switch (flag) {
    case 'submit-mode':
      activeClass = 'alert-success'
      message = 'item added to the list'
      break
    case 'edit-mode':
      activeClass = 'alert-success'
      message = 'Value Changed'
      break
    case 'delete-mode':
      activeClass = 'alert-danger'
      message = 'Item Removed'
      break
    case 'empty-list-mode':
      activeClass = 'alert-danger'
      message = 'Empty List'
      break
    default:
      activeClass = ''
      message = ''
  }
  return <p className={`alert ${activeClass}`}>{message}</p>
}

export default Alert
