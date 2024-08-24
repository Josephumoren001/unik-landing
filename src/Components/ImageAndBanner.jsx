import React from 'react'
import '../App.css'
import girlPainting from '../assets/painting-kid-s-portrait 1.png'
function ImageAndBanner() {
  return (
    <div className='flex ma-top gp-1 image-and-banner'>
      <img src={girlPainting} className="girl-painting" alt="" />
      <div className="banner">
        <div className="btext">Join a community of forward-thinking business leaders. Whether you're scaling up or starting out, our network will inspire and support your growth with AI</div>
        <div className="wa">
          <span className="wa-icon"></span>
          <span className="wa-text">Check Out our Community Page</span>
        </div>
      </div>
    </div>
  )
}

export default ImageAndBanner