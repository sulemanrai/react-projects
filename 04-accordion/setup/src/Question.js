import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ id, info, title }) => {
  const [visible, setVisisble] = useState(false)

  const toggleState = () => {
    setVisisble(!visible)
  }

  const AiOutlinePlusReplacement = (props) => {
    const {
      props: {
        attr: { pId, ...rest },
        children: [defs, ...paths],
      },
    } = AiOutlinePlus()

    const SAFE_PATHS = paths.map(
      ({ type, props: { pId: pathId, ...pathProps } }) =>
        React.createElement(type, pathProps)
    )
    const SAFE_CHILDREN = React.Children.toArray([defs, ...SAFE_PATHS])
    const SAFE_PROPS = { attr: rest, ...props }

    return React.cloneElement(AiOutlinePlus(), SAFE_PROPS, SAFE_CHILDREN)
  }

  return (
    <article className='question' key={id}>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={toggleState}>
          {visible ? <AiOutlineMinus /> : <AiOutlinePlusReplacement />}
        </button>
      </header>
      {visible && <p>{info}</p>}
    </article>
  )
}

export default Question
