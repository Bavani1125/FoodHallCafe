import React, { useState, useEffect } from 'react';
import './Home.css';
import cafeImage from '../assets/cafe.jpeg';
import coffeeImage from '../assets/coffee.jpeg';
import bakeryImage from '../assets/bakery.jpeg';
import foodImage from '../assets/food.jpeg';
import peopleImage from '../assets/people.jpeg';

const Home = () => {
  const images = [
    {
      src: cafeImage,
      alt: "Cafe Front",
      text: "A warm welcome to our cafe!",
      styleClass: "cafe-text",
    },
    {
      src: coffeeImage,
      alt: "Coffee Cup",
      text: "Freshly brewed coffee every day.",
      styleClass: "coffee-text",
    },
    {
      src: bakeryImage,
      alt: "Bakery Items",
      text: "Delicious baked goods made in-house.",
      styleClass: "bakery-text",
    },
    {
      src: foodImage,
      alt: "Delicious Food",
      text: "Savor our signature dishes.",
      styleClass: "food-text",
    },
    {
      src: peopleImage,
      alt: "People Around",
      text: "A perfect place to connect with friends.",
      styleClass: "people-text",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll functionality using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div id="home" className="home">
      {/* Content Section */}
      <div className="home-content">
        <h1>Welcome to Food Hall Cafe</h1>
        <p>
          Experience the perfect blend of comfort, taste, and ambiance. Join us
          for an unforgettable coffee experience!
        </p>
      </div>

      {/* Carousel Section */}
      <div className="carousel">
        <div className="carousel-slide">
          <img
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            className="carousel-image"
          />
          <div
            className={`image-text ${images[currentImageIndex].styleClass}`}
          >
            {images[currentImageIndex].text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;