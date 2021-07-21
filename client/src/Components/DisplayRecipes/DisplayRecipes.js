import React from 'react';
import './DisplayRecipes.css';
import RecipeContainer from '../RecipeContainer/RecipeContainer.js';

function DisplayRecipes(props) {

  console.log('display', props.recipes.length)
  return (
    <div className='display_recipes'>
      {props.recipes.map((recipe, index) => (<RecipeContainer index={index} recipe={recipe}/>))}
    </div>
  );
}

export default DisplayRecipes