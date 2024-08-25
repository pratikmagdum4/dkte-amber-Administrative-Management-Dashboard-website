import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { HomeLink } from "../../components/variables/variables";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css'; // Import animate.css for easy animations

// Import your images
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import { BASE_URL } from "../../api";
import axios from "axios";

const CarouselComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear',
  };
  const [imageList, setImageList] = useState([]);
  const [imageType, setImageType] = useState('all');
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const[imageUrl, setImageUrl] = useState('')
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/imgupload/getverified`, {
          params: { imageType: imageType !== 'all' ? imageType : '' }
        });
        const images = response.data.map(image => ({
          ...image,
          selfImage: image.selfImage.replace(/^"|"$/g, '') 
        }));
        console.log("THe uimages are ",imageList)
        if (images[0].imageUrl)
        {
        setImageUrl(images[0].imageUrl)
        }
        setImageList(images);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [imageType]);
  useEffect(() => {
    // animations 
  }, []);

  return (
    <>
      <Navbar links={HomeLink} />
<div className="mt-4">
      <header className="text-center mt-20">
        <h1 className="text-5xl font-bold text-indigo-600 animate__animated animate__fadeInDown">Welcome to Ambar</h1>
        <p className="text-lg mt-4 text-gray-700 animate__animated animate__fadeInUp">A canvas of creativity and knowledge</p>
      </header>

      <div className="carousel-container mx-auto mt-10 w-full max-w-6xl shadow-lg border rounded-lg overflow-hidden animate__animated animate__zoomIn">
        <Slider {...settings}>
          <div className="relative h-96">
            <img src={img1} alt="Slide 1" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Explore Stunning Art</h2>
            </div>
          </div>
          <div className="relative h-96">
            <img src={img2} alt="Slide 2" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Capture Moments</h2>
            </div>
          </div>
          <div className="relative h-96">
            <img src={img3} alt="Slide 3" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Share Knowledge</h2>
            </div>
          </div>
          <div className="relative h-96">
            <img src={img4} alt="Slide 4" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-white text-3xl font-bold">Inspire Creativity</h2>
            </div>
          </div>
        </Slider>
      </div>

      <section className="mt-16 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
          <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInLeft">
            <img src="/path/to/logo1.png" alt="Sketches" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Sketches</h3>
            <p className="text-gray-600">Discover the intricate details of student sketches.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
              <img src={imageUrl} alt="Photographs" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Photographs</h3>
            <p className="text-gray-600">Capture the world through the lens of our students.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md animate__animated animate__fadeInRight">
            <img src="/path/to/logo3.png" alt="Articles" className="mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Articles</h3>
            <p className="text-gray-600">Read insightful articles and technical pieces.</p>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
}

export default CarouselComponent;
