import React from 'react'
import { Link } from 'react-router-dom'
import recipe from '../../img/comida-kawaii.webp'
import './RecipeContainer.css'

export default function RecipeContainer (props) {

console.log('recipeContainer', props.recipe)
  return (
    <div className='card_container'>
      <h1 className='card_title'>{ props.recipe.title}</h1>
      <div className='image'>
        <img src={props.recipe.image ? props.recipe.image : `${recipe} `} alt="picture" />
      </div>
      <div className="diets_card">
        {props.recipe.diets?.map((diet, index) => (
          <span key={index}>
            <p>{diet}</p>
          </span>
        ))}
      </div>
        <Link to={`/recipe/${props.recipe.id}`}>
        <button className="button_card" type='submit'>
          Read More
        </button>
        </Link>
    </div>
  )
}
