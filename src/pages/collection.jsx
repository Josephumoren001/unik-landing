import React from 'react';
import { ScrollRestoration } from "react-router-dom";
import Header from "../Sections/Header"
import Footer from "../Sections/Footer";
import './collection.css'



const Collection = () => {
  const images = [
    'https://i.imgur.com/lQ3NQBS.jpg',
    'https://i.imgur.com/L4qUEcV.jpg',
    'https://i.imgur.com/5JKNmR7.jpg',
    'https://i.imgur.com/m6pVH4N.jpg',
    'https://i.imgur.com/xGBalWn.jpg',
    'https://i.imgur.com/yuE3roa.jpg',
    'https://i.imgur.com/mI1rTZ2.jpg',
    'https://i.imgur.com/Y1KC57Z.jpg',
    'https://i.imgur.com/fg2wnvM.jpg',
    'https://i.imgur.com/VTu30HA.jpg',
    'https://i.imgur.com/mJ1jUsF.jpg',
    'https://i.imgur.com/7TRvnvd.jpg',
    'https://i.imgur.com/gwbD5bi.jpg',
    'https://i.imgur.com/VmGfENF.jpg',
    'https://i.imgur.com/xXqaYjV.jpg',
    'https://i.imgur.com/lGYHxpU.jpg',
    'https://i.imgur.com/38nRC3W.jpg',
    'https://i.imgur.com/8s04HMW.jpg',
    'https://i.imgur.com/qj9Safm.jpg',
    'https://i.imgur.com/IUzmTP6.jpg',
    'https://i.imgur.com/CYMoFXF.jpg',
    'https://i.imgur.com/TQHN2qL.jpg',
    'https://i.imgur.com/PVudJIE.jpg',
    'https://i.imgur.com/a83G1hm.jpg',
    'https://i.imgur.com/VCt7ZYl.jpg',
    'https://i.imgur.com/7rgsz6C.jpg',
    'https://i.imgur.com/bdAeuoO.jpg',
    'https://i.imgur.com/Xw4jQSm.jpg',
    'https://i.imgur.com/i2FSWun.jpg',
    'https://i.imgur.com/YYIqru8.jpg',
    'https://i.imgur.com/lQ3NQBS.jpg',
   
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