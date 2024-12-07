import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { HomeLink } from "../../components/variables/variables";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'animate.css'; // Import animate.css for easy animations
import Skeleton from 'react-loading-skeleton'; // Import react-loading-skeleton
import 'react-loading-skeleton/dist/skeleton.css';
import axios from "axios";
import { BASE_URL } from "../../api";
import Loading from "../../components/ui/Loader";
// Import your images
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import { Link } from "react-router-dom";

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
  const [imageUrl, setImageUrl] = useState('');
  const [imageSketchUrl, setSketchImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [sketchTitle, setSketchTitle] = useState('');
  const [techArticleList, setTechArticleList] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [articleTile, setArticleTitle] = useState('');
  const [articleUrl, setArticleUrl] = useState('');
  const [articleName, setArticleName] = useState('');
  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true); // Start loading
      try {
        const response = await axios.get(`${BASE_URL}/api/imgupload/get`, {
          params: { imageType: imageType !== 'all' ? imageType : '' },
        });
        const images = response.data.map((image) => ({
          ...image,
          selfImage: image.selfImage.replace(/^"|"$/g, ''), // Clean up the image URL
        }));

        const photos = response.data.filter(image => image.imageType !== "sketch");
        const length = photos.length;
        if (length > 0) {
          const randomIndex = Math.floor(Math.random() * length);
          setTitle(photos[randomIndex].title);
          setImageUrl(photos[randomIndex].imageUrl); // Set imageUrl to a random image URL
        }

        setImageList(photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false); // End loading
      }
    };

    const fetchSketchImages = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/imgupload/get`, {
          params: { imageType: imageType !== 'all' ? imageType : '' },
        });
        const sketches = response.data.filter(image => image.imageType !== "photography");

        const length = sketches.length;
        if (length > 0) {
          const randomIndex = Math.floor(Math.random() * length);
          setSketchTitle(sketches[randomIndex].title);
          setSketchImageUrl(sketches[randomIndex].imageUrl); // Set imageUrl to a random sketch URL
        }
      } catch (error) {
        console.error('Error fetching sketches:', error);
      }
    };

    fetchSketchImages();
    fetchImages();
  }, [imageType]);

  useEffect(() => {
    const fetchTechArticles = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/technical/get`);
        const articles = response.data.map(article => ({
          ...article,
          selfImage: article.selfImage ? article.selfImage.replace(/^"|"$/g, '') : ''
        }));
        // console.log("The articles are ",articles)
        setTechArticleList(articles);
        const length = articles.length;
        if (length > 0) {
          const randomIndex = Math.floor(Math.random() * length);
          setArticleTitle(articles[randomIndex].title);
          setArticleUrl(articles[randomIndex].contentPdf);
          setArticleName(articles[randomIndex].stdname);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchTechArticles();
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
            {/* Repeat for other slides */}
          </Slider>
        </div>

        <section className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl">
            <div className="p-20 bg-white rounded-lg shadow-md animate__animated animate__fadeInLeft">
              {loading ? (
                <div className="pb-12">
                  <Loading isHome={true} />
                </div>
              ) : (
                <img src={imageSketchUrl} alt="Sketches" className="mx-auto mb-4" />
              )}
              <h3 className="text-2xl font-bold mb-2">Sketches</h3>
              <p className="text-gray-600">{loading ? <Skeleton /> : sketchTitle}</p>
            </div>

            <div className="p-20 bg-white rounded-lg shadow-md animate__animated animate__fadeInUp">
              {loading ? (
                <div className="pb-24">
                  <Loading isHome={true} />
                </div>
              ) : (
                <img src={imageUrl} alt="Photographs" className="mx-auto mb-4" />
              )}
              <h3 className="text-2xl font-bold mb-2">Photographs</h3>
              <p className="text-gray-600">{loading ? <Skeleton /> : title}</p>
            </div>

            <div className="p-20 bg-white rounded-lg shadow-md animate__animated animate__fadeInRight">
              {loading ? (
                <div className="pb-12">
                  <Loading isHome={true} />
                </div>
              ) : (
                // <img src="/path/to/logo3.png" alt="Articles" className="mx-auto mb-4" />
                <h1 className="text-2xl font-bold">Articles</h1>

              )}
              <h2 className="text-2xl font-bold mb-2">{articleTile}</h2>
              <p className="text-gray-600">{loading ? <Skeleton /> : articleTile}</p>
              <h4 className="text-gray-600">by {articleName || 'Author Name'}</h4>
              <Link to={articleUrl} className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                View
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CarouselComponent;
