import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDiets } from '../../Redux/Actions/dietsActions';
import { getRecipes } from '../../Redux/Actions/recipesActions';
import './Landing.css'

function Landing() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDiets())
    dispatch(getRecipes())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='landing_container'>
      <h1 className= 'landing_title'>Bienvenidos a FoodLand</h1>
      <h2 className='landing_Sub-title'>Busca la receta que mas te guste!</h2>
    <div className='landing_link'>
      <Link to='/home'>
        <button className='btn'>Comencemos</button>
      </Link>
    </div>
    </div>
  )
}

export default Landing

