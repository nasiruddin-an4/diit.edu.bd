import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { heroSlides } from "../constants"; // Import the slides data
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import the Lucide icons
import { useRef } from "react";

const HeroCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true, // Enable fade effect
    slidesToShow: 1, // Only one slide visible at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows to use custom ones
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev(); // Go to the previous slide
  };

  const goToNext = () => {
    sliderRef.current.slickNext(); // Go to the next slide
  };

  return (
    <div className="relative">
      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {heroSlides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[800px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation arrows */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 text-black p-3 rounded-full shadow-lg z-10"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-70 text-black p-3 rounded-full shadow-lg z-10"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default HeroCarousel;
