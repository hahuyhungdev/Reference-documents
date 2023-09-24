import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => (
  <div
    className='not-found'
    style={{
      textAlign: 'center'
    }}
  >
    <img src='https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png' alt='not-found' />
    <button
      style={{
        display: 'block',
        margin: '20px auto'
      }}
    >
      <Link to='/' className='link-home'>
        Back to Home
      </Link>
    </button>
  </div>
)

export default NotFound
