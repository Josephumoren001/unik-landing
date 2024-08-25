import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import OptionsBar from '../Components/OptionsBar'
import ProductCard from '../Components/ProductCard'
import cardImage from '../assets/Rectangle 7.png'
import cardImage2 from '../assets/prompt.svg'
import cardImage3 from '../assets/makeup.svg'
import cardImage4 from '../assets/event.svg'
// import cardImage5 from '../assets/event.svg'
 
 <assets />

function SectionSub() {
  return (
    <>
    <section className="section-sub">
        <OptionsBar />
        <div className="product-cards-container">

<Link to='/waitlist'>
        <ProductCard 
        image={cardImage} 
        cardTitle={"AI In Fashion:"} 
        titleDetail={"Lead your fashion brand to the forefront of innovation and style"} 
        courseTitle={"Course"} 
        level={"Beginner"} 
        duration={"2hrs"} 
        profilePic="" 
        name={"Fashion Doctor"} 
        price={10000} 
        priceSlashed={20000} />
</Link>

<Link to='/waitlist'>
        <ProductCard 
        image={cardImage4} 
        cardTitle={"Event Designers:"} 
        titleDetail={"Use AI to bring your events to life and leave a lasting impact on your clients"} 
        courseTitle={"Course"} 
        level={"Beginner"} 
        duration={"2hrs"} 
        profilePic="" 
        name={"Joseph Umoren"} 
        price={10000} 
        priceSlashed={20000} />
        </Link>

<Link to='/waitlist'>
        <ProductCard 
        image={cardImage2} 
        cardTitle={"Prompt Engineering:"} 
        titleDetail={"Scaling Up as an expert designer. Learn to craft prompts that maximize AI efficiency and creativity"} 
        courseTitle={"Course"} 
        level={"Beginner"} 
        duration={"2hrs"} 
        profilePic="" 
        name={"Joseph Umoren"} 
        price={10000} 
        priceSlashed={20000} />
        </Link>

<Link to='/waitlist'>
        <ProductCard 
        image={cardImage3} 
        cardTitle={"AI in Beauty:"} 
        titleDetail={"Leverage AI to create cutting-edge makeup and beauty solutions"} 
        courseTitle={"Course"} 
        level={"Beginner"} 
        duration={"2hrs"} 
        profilePic="" 
        name={"Joseph Umoren"} 
        price={10000} 
        priceSlashed={20000} />
        </Link>

        </div>


    </section>
    <div className="line-grad"></div>



    {/* third section */}

    <div className="section-heading">
    Empowering Over <span className="text-grad">200 Creative Minds</span> with Generative AI Brilliance
    </div>



    <div className="flex">
        <Link to='/products' className='btn-large-fit active'>View Courses</Link>
    </div>

    </>
  )
}

export default SectionSub