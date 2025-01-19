
/* Home page slider component 
Purpose: To greet students on festivals or any other special occasions, and to display the latest updates and news of batches.
*/
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const images = [
  "src/components/HomeCompo/image1.png",
  "src/components/HomeCompo/image2.png",
];

export default function ImageSlider() {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through slides
    speed: 800, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Automatically move to the next slide
    autoplaySpeed: 500, // Time interval for autoplay
    arrows: true, // Show next/previous arrows
  };

  return (
    <div className="mybox mt-16">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
