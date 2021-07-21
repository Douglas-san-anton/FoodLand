import { GET_RECIPES, GET_RECIPES_DETAIL, SEARCH_RECIPES, CREATE_RECIPE} from '../Actions/recipesActions';
import { GET_DIETS, DIET_FILTER } from '../Actions/dietsActions';
import { ORDER_DESC_NAME, ORDER_LOWER_SCORE, ORDER_ASC_NAME, ORDER_HIGHER_SCORE, RESET  } from '../Actions/orderActions';


const initialState = {
  recipes: [],
  diets : [],
  recipeById: {},
  createdRecipe: [],
  filteredRecipes: [],
  orderBy: "Select",
  filterBy: "All"
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    //RECIPES
      case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload
      }

      case GET_RECIPES_DETAIL:
      return {
        ...state,
        recipeById: action.payload
      }

      case CREATE_RECIPE:
      return {
        ...state,
        createdRecipe: action.payload
      }

    case SEARCH_RECIPES :
      console.log(action.payload)
      return {
        ...state,
        recipes: action.payload
      }

    //DIETS:
    case GET_DIETS:
    return{
      ...state,
      diets: action.payload
    }

    case DIET_FILTER:
    return {
      ...state,
      filteredRecipes: action.payload.recipeDiet,
      filterBy: action.payload.type
    }

    //ORDER:
    case ORDER_ASC_NAME:
      return {
        ...state,
        filteredRecipes: action.payload.orderedRecipes,
        orderBy: action.payload.name
      }

    case ORDER_DESC_NAME:
      return {
        ...state,
        filteredRecipes: action.payload.orderedRecipes,
        orderBy: action.payload.name
      }

    case ORDER_HIGHER_SCORE:
      return {
        ...state,
        filteredRecipes: action.payload.orderedRecipes,
        orderBy: action.payload.name
      }

    case ORDER_LOWER_SCORE:
      return {
        ...state,
        filteredRecipes: action.payload.orderedRecipes,
        orderBy: action.payload.name
      }

    case RESET:
      return {
        ...state,
        filteredRecipes: [],
        orderBy: "Select",
        filterBy: "All"
      }

    default:
      return state
  }
}

export default rootReducer;