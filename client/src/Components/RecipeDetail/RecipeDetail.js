import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetail } from '../../Redux/Actions/recipesActions';
import Nav from '../Nav/Nav';
import './RecipeDetail.css';
import recipeImage from '../../img/comida-kawaii.webp';

function RecipeDetail({match}) {

  const recipe = useSelector((state) => state.recipeById)
  const dispatch = useDispatch();

  useEffect(() => {
      console.log("useEffect")
      dispatch(getRecipeDetail(match.params.id))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(recipe.diets)

  function summary () {
    return {__html: recipe.summary};
  }

  return (
    <div>
    <>
    <Nav />
    <div className="detailsContainer">
      <h1>{recipe.title} </h1>
      <div className="details">
        <div className="image_detail">
          <img src={recipe.image? recipe.image : `${recipeImage}` } alt="fotuli" />
        </div>
        <div className="scoreDiv">
              {/* <h2>Score:</h2> */}
              <span className="description_number">Score: {recipe.spoonacularScore}</span>
            {/*   <h2>Health Score:</h2> */}
              <span className="description_number"> Health Score: {recipe.healthScore}</span>
          </div>
        <div className="text">
          <div className="diets">
            <div className ="diets_name" style={{textTransform: 'uppercase'}}>
            {recipe.diets?.map((diet) => (
                <span key={diet}>
                  <span className="span_diets">
                    {diet}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="summary">
              <h2>Summary</h2>
          </div>
          <div dangerouslySetInnerHTML={summary()} className="description" />
          <div>
            <h2>Instructions</h2>
            <p className="description">{recipe.analyzedInstructions?.map((inst) => (
              <ul>
                <li>{inst}</li>
                </ul>
            ))}</p>
          </div>
        </div>
      </div>
    </div>
  </>
  </div>
  )
}

export default RecipeDetail;