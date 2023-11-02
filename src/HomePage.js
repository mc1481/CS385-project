import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of your app.</p>
      <Link to="/veganSearch">
        <button>Vegan Recipes</button>
      </Link>
      <Link to="/vegetarianSearch">
        <button>Vegetarian Recipes</button>
      </Link>
    </div>
  );
}

export default HomePage;

