import React from "react";
import { Link, ScrollRestoration } from "react-router-dom";
import '../App.css'
import Header from "../Sections/Header";
import DiscountBanner from "../Components/DiscountBanner";
import ProductCard from "../Components/ProductCard";
import Footer from "../Sections/Footer";
import cardImage from '../assets/Rectangle 7.png'
import image1 from '../assets/fashion.svg'
import image2 from '../assets/music.svg'
import image3 from '../assets/anime.svg'
import image4 from '../assets/market.svg'
function Start() {
  return (
    <>
      <Header />
      <DiscountBanner  />
      <div className="product-cards-container product-background-gradient">
        <Link to='/waitlist'>
        
        <ProductCard
          image={image1}
          cardTitle={"Generative AI In Fashion: let see something"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />
</Link>
<Link to='/waitlist'>
        <ProductCard
          image={image2}
          cardTitle={"Event Decorator AI Agent: "}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />
</Link>

<Link to='/waitlist'>
        <ProductCard
          image={image3}
          cardTitle={"Prompt Engineering: Scaling Up as an expert designer"}
          titleDetail={"..."}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>

        <ProductCard
          image={image4}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
        />
</Link>

<Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>

          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>
          
          <Link to='/waitlist'>
        <ProductCard
          image={cardImage}
          cardTitle={"Generative AI In Fashion:"}
          titleDetail={"Scaling Up as an expert designer"}
          courseTitle={"Course"}
          level={"Beginner"}
          duration={"2hrs"}
          profilePic=""
          name={"Joseph Umoren"}
          price={30000}
          priceSlashed={50000}
          />
          </Link>
      </div>
      <div className="ma-bottom-2x">{/*for margin space*/}</div>
      <div className="hr">{/*Horizontail Line*/}</div>
      <div className="ma-bottom-2x">{/*for margin space*/}</div>
      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default Start;
