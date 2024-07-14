import React from 'react';
import PersonDetails from '../../components/ui/PersonData';
import Navbar from '../navbar/Navbar';
import { HomeLink } from '../../components/varialbles/variables';
import img1 from '../../assets/paymentQR.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { PanelBottomDashedIcon } from 'lucide-react';
import { Label } from '@radix-ui/react-dropdown-menu';
import Footer from '../footer/Footer';


const person = {
    image: img1,
    name: 'Aishu Wandare',
    branch: 'Ai and Ds',
    contact: '12345 67890',
    email: 'aishu@mail.com',
    article: 'This is the content of the article. It can be long and will be displayed in a text area.',
};
const personM = {
  image: img1,
  name: 'Aishu Wandare',
  branch: 'Ai and Ds',
  contact: '12345 67890',
  email: 'aishu@mail.com',
  article: 'ही लेखाची सामग्री आहे. ते लांब असू शकते आणि मजकूर क्षेत्रात प्रदर्शित केले जाईल.',
};

const Home1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 600,

  };
    return (
        <>
          <Navbar links={HomeLink} />
          <div className="flex flex-col items-center p-8 ">
                <h1 className="text-3xl font-bold">ENGLISH</h1>
          </div>
            <Slider {...settings}>

              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={person} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={person} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={person} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={person} />
              </div>
              </Slider>
          <div className="flex flex-col items-center p-8 ">
                <h1 className="text-3xl font-bold">Marathi </h1>
          </div>
            <Slider {...settings}>

              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={personM} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={personM} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={personM} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={personM} />
              </div>
              </Slider>
          <div className="flex flex-col items-center p-8 ">
                <h1 className="text-3xl font-bold">Hindi </h1>
          </div>
            <Slider {...settings}>

              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={personM} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={personM} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={personM} />
              </div>
              <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                  <PersonDetails person={personM} />
              </div>
              </Slider>
          <Footer/>
        </>
    );
};

export default Home1;
