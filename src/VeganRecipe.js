import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

function VeganRecipe() {

  const [recipeIngredients, setRecipeIngredients] = useState({});
  const [recipeInstructions, setRecipeInstructions] = useState({});
  // define the base URL for spoonacular API
  const apiKey = "480f9fd85f88450ca26a5837d4589693";
  // Access the recipe.id parameter from the URL
  const { id } = useParams();
  console.log("Recipe id from url: ", id);

  // define a useEffect to fetch ingredients when the component mounts
  useEffect(() => {
    console.log("fetchingIngredients function called");
    // define function to fetch ingredients
    async function fetchIngredients(id) {
        try {
          const response = await axios.get(
            `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apiKey}`
          );

          console.log("Api response data: ", response.data);
          setRecipeIngredients({
            ...recipeIngredients,
            [id]: response.data.ingredients
          });
        } catch (error) {
            console.error("Error fetching ingredients: ", error);
        }
    }

    // call the fetch ingredients function when the component mounts
    fetchIngredients(id);
  }, [id, apiKey, recipeIngredients]);

  return (
    <div>
      <h1>Vegan Recipe Details</h1>
      <p>Here you can view the details of a specific vegan recipe.</p>
      <b>Ingredients</b>
      {recipeIngredients[id] && (
        <ul>
            {recipeIngredients[id].map((ingredient, index) => (
                <li key={index}>{ingredient.name}</li>
            ))}
        </ul>
      )}
    </div>
  );
}

export default VeganRecipe;
