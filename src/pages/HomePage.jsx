import { useState } from "react";
import { ScrollRestoration } from "react-router-dom";
import "../App.css";
import Header from "../Sections/Header";
import SectionMain from "../Sections/SectionMain";
// import mainBGImage from './assets/mainBG.png'
import SectionSub from "../Sections/SectionSub";
import ImageAndBanner from "../Components/ImageAndBanner";
import SectionEnd from "../Sections/SectionEnd";
import Footer from "../Sections/Footer";

function App() {
  return (
    <>
      <Header />
      <SectionMain />
      <SectionSub />
      <ImageAndBanner />
      <SectionEnd />
      <div className="ma-bottom-2x">{/*for margin space*/}</div>
      <div className="hr">{/*Horizontail Line*/}</div>
      <div className="ma-bottom-2x">{/*for margin space*/}</div>

      <Footer />
      <ScrollRestoration />
    </>
  );
}

export default App;
