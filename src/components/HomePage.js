import React from 'react';
import { Link } from 'react-router-dom';
import './../CSS/HomePage.css';
import { useState, useEffect } from 'react';
import bowlHandImage from  './../CSS/bowl-hand-3.jpeg';

function HomePage() {

  const [selectedMeal, setSelectedMeal] = useState(''); 

  // Function to handle the change in meal type
  const handleMealChange = (event) => {
    setSelectedMeal(event.target.value);
  };

  return (
      <div className="home-page">
        <div className="home-title">
          <h1>Welcome to Veggie Bites & Delights</h1>
        </div>

        <Link to="/veganSearch">
          <button className="vegan-button">Vegan Recipes</button>
        </Link>
        <Link to="/vegetarianSearch">
          <button className="vegetarian-button">Vegetarian Recipes</button>
        </Link>

        <div className="meal-dropdown">
          <label htmlFor="mealType">Meal:</label>
          <select
            id="mealType"
            value={selectedMeal}
            onChange={handleMealChange}
          >
            <option value="">Choose meal type</option>
            <option value="breakfast">Breakfast</option>
            <option value="dinner">Dinner</option>
            <option value="dessert">Dessert</option>
          </select>
        </div>

        <div className="meal-image-container">
            <img src={bowlHandImage} alt="Meal Image" className="meal-image" />
        </div>
      </div>
  );
}

export default HomePage;

