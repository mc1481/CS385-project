import axios from "axios";
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function VegetarianSearch() {

  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);

  // define the base URL for spoonacular API
  const apiKey = "480f9fd85f88450ca26a5837d4589693";

  // handle the search bar input changing
  function onSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  // define a useEffect to fetch recipes when searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      fetchRecipes();
    } else {
        setRecipes([]);
    }
  }, [searchTerm]);

  // function to get vegetarian recipes
  async function fetchRecipes() {
    setLoading(true);
    try {
        const response = await axios.get(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}&number=20&diet=vegetarian`
        );

        if (response.data.results.length === 0) {
            setRecipes([]);
            setNoResults(true);
        } else {
            setRecipes(response.data.results);
            setNoResults(false);
        }
    } catch (error) {
        console.error("Error fetching recipes: ", error);
    }
    setLoading(false);
  }

  return (
    <div>
      <div className="centered-container">
        <h1>Vegetarian Recipes</h1>
        <input
          type="text"
          placeholder="Search for vegetarian recipes"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
      {loading ? <p>Loading...</p> : null}
      {noResults ? (
        <p>Sorry, there are no vegetarian recipes matching your search</p>
      ) : null}

      <div className="centered-recipes">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <p>{recipe.title}</p>
            <Link to={`/vegetarianRecipe/${recipe.id}`}>
                <button>View Recipe Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VegetarianSearch;
