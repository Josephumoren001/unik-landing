import React from 'react'
import '../App.css'
import DiscountBannerImg from '../assets/discount-banner-img.png'

function DiscountBanner() {
  return (
    <div className='radial-grad-circle'>
    <div className='discount-banner padding-LR '>
        <div className="discount-banner-text">
            <div className="text-medium">
                get
            </div>
            <div className="text-xxlarge">
                Over 90% Off
            </div>
        </div>
        <img src={DiscountBannerImg} className="discount-banner-img" alt="" />
    </div>
    </div>
  )
}

export default DiscountBanner