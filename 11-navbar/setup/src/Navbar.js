import React from 'react'
import { links, social } from './data'

const Navbar = () => {
  return (
    <nav>
      <>
        <div className='nav-center'>
          <div className='nav-header'>
            <img
              src='/static/media/logo.2bb7da65.svg'
              className='logo'
              alt='logo'
            />
            <button className='nav-toggle'>
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 448 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'></path>
              </svg>
            </button>
          </div>
          <div className='links-container'>
            <ul className='links'>
              {links.map((link) => {
                const { url, id, text } = link
                return (
                  <li>
                    <a href={url} key={id}>
                      {text}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
          <ul className='social-icons'>
            {social.map((link) => {
              const { url, id, icon } = link
              return (
                <li>
                  <a href={url} key={id}>
                    {icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    </nav>
  )
}

export default Navbar
