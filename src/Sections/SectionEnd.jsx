import React from 'react'
import waitList from '../pages/waitlist'
import '../App.css'
import { Link } from 'react-router-dom'
import ReviewCard from '../Components/ReviewCard'
function SectionEnd() {
  return (
    <section className="section-end">
        <div className="flex end-heading">
            Don't just take it from us!
        </div>
        <div className="flex font-normal ma-bottom pa-LR ">
            <p className='t-center flex'>

        Join a community of forward-thinking business leaders. Whether you're scaling up or starting out, <br /> our network will inspire and support your growth with AI
            </p>
        </div>
        <div className="review-cont ma-bottom-2x">
            <ReviewCard review={'"Integrating AI into my business has been a game-changer. These courses provided the knowledge and tools to innovate effectively."'} reviewer={'@moneymachine'}/>
            <ReviewCard review={'"AI is the future, and these courses are the key to unlocking its potential in my business. Highly recommended!"'} reviewer={'@linda_'}/>
            <ReviewCard review={'"The impact of AI on my business has been incredible. These courses made it easy to understand and apply"'} reviewer={'@perry'}/>
        </div>
        <div className="flex end-heading">
        Lead, Don’t Follow
        </div>
        <div className="flex font-normal ma-bottom">
        Your business deserves to be at the cutting edge. With our courses, you're not just learning—you're leading the charge in AI innovation
        </div>
        <div className="flex">
            <Link to='/waitlist' className="btn-large-fit">
                Start Here
            </Link>
        </div>
        <div className="ma-bottom-2x">{/*for margin space*/}</div>
    </section>
  )
}

export default SectionEnd