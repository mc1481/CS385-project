import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Veggie Bites & Delights</h1>
      <p className="home-description">Here you can discover hundreds of healthy recipes both vegan and vegetarian.
        Discover a wide range of cuisines offering both vegan and vegetarian options.
      </p>
      <Link to="/veganSearch">
        <button className="vegan-button">Vegan Recipes</button>
      </Link>
      <Link to="/vegetarianSearch">
        <button className="vegetarian-button">Vegetarian Recipes</button>
      </Link>
    </div>
  );
}

export default HomePage;

