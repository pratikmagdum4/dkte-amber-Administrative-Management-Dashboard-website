import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { HomeLink } from "../../components/varialbles/variables";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Import your images
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';


const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
     <Navbar links={HomeLink}/>
   
    <div className="carousel-container mx-auto mt-10 w-full max-w-4xl">
     
      <Slider {...settings}>
        <div className="relative h-full">
          <img src={img1} alt="Slide 1" className="w-full h-full object-cover bottom-{50px}" />
        </div>
        <div className="relative h-full">
          <img src={img2} alt="Slide 2" className="w-full h-full object-cover bottom-{50px}" />
        </div>
        <div className="relative h-full">
          <img src={img3} alt="Slide 3" className="w-full h-full object-cover bottom-{50px}" />
        </div>
        <div className="relative h-full">
          <img src={img4} alt="Slide 4" className="w-full h-full object-cover bottom-{50px}" />
        </div>
      </Slider>
      
    </div>
      <Footer />
    </>
  );
}

export default CarouselComponent;