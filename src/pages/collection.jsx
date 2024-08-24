import React from 'react';
import { ScrollRestoration } from "react-router-dom";
import Header from "../Sections/Header"
import Footer from "../Sections/Footer";
import './collection.css'
import image1 from '../assets/Col1.svg';
import image2 from '../assets/Col2.svg';
import image3 from '../assets/Col3.svg';
import image4 from '../assets/Col4.svg';
import image5 from '../assets/Col5.svg';
import image6 from '../assets/Col6.svg';
import image7 from '../assets/Col7.svg';
import image8 from '../assets/Col8.svg';
import image9 from '../assets/Col9.svg';
import image10 from '../assets/Col10.svg';
import image11 from '../assets/Col11.svg';
import image12 from '../assets/Col12.svg';
import image13 from '../assets/Col13.svg';
import image14 from '../assets/Col14.svg';
import image15 from '../assets/Col15.svg';
import image16 from '../assets/Col16.svg';
import image17 from '../assets/Col17.svg';
import image18 from '../assets/Col18.svg';
import image19 from '../assets/Col19.svg';
import image20 from '../assets/Col20.svg';
import image21 from '../assets/Col21.svg';
import image22 from '../assets/Col22.svg';
import image23 from '../assets/Col23.svg';
import image24 from '../assets/Col24.svg';
import image25 from '../assets/Col25.svg';
import image26 from '../assets/Col26.svg';
import image27 from '../assets/Col27.svg';
import image28 from '../assets/Col28.svg';
import image29 from '../assets/Col29.svg';
import image30 from '../assets/Col30.svg';


const Collection = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
    image22,
    image23,
    image24,
    image25,
    image26,
    image27,
    image28,
    image29,
    image30,
   
  ];

  return (
    <>
      <Header />
      <div className="container collecionContainer mx-auto max-w-screen-xl px-4 py-8">
     <div className="py-12 mt-12 mb-6">
      <h1 className="text-center text-3xl text-white font-bold mb-8 sm:text-4xl md:text-5xl lg:text-6xl">
        Collections from our Generative Students
      </h1>
      <p className="text-center text-white ">These stunning visuals are just a glimpse of what's possible when imagination and innovation come together</p>
      </div>
      <div className="grid  grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {images.map((image, index) => (
          <img 
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg "
          />
        ))}
      </div>
    </div>
    <Footer />
    <ScrollRestoration />
    </>
  );
};

export default Collection;