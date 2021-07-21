export const GET_DIETS = 'GET_DIETS';
export const DIET_FILTER = 'DIET_FILTER';

export function getDiets() {
  return function (dispatch) {
    return fetch('http://localhost:3001/types')
    .then((response) => response.json())
    .then((json) => {
      dispatch({ type: GET_DIETS, payload: json });
    });
  };
}

export const dietFilter = (type) => (dispatch, getState) => {
  if (type === "All") {
    const recipeDiet = getState().recipes.slice()
    dispatch({
      type: DIET_FILTER,
      payload: {type, recipeDiet}
    })
  } else {
    const recipeDiet = getState().recipes.slice().filter((recipe) => recipe.diets.includes(type))
    dispatch({
      type: DIET_FILTER,
      payload: {recipeDiet, type}
    })
  }
}