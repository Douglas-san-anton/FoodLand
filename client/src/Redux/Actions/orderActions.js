export const ORDER_HIGHER_SCORE = 'ORDER_HIGHER_SCORE';
export const ORDER_LOWER_SCORE = 'ORDER_LOWER_SCORE';
export const ORDER_ASC_NAME = 'ORDER_ASC_NAME';
export const ORDER_DESC_NAME = 'ORDER_DESC_NAME';
export const RESET = 'RESET';

export const orderAsc = (type) => (dispatch, getState) => {
  const filterBy = getState().filterBy
  const recipes = getState().recipes.slice()
  const filtered = getState().filteredRecipes.slice()
  if (filterBy === 'All') {
    if (type === 'higher_score') {
      const orderedRecipes = recipes.sort(
        (a, b) => a.spoonacularScore - b.spoonacularScore
      )
      dispatch({
        type: ORDER_HIGHER_SCORE,
        payload: {
          orderedRecipes,
          name: type
        }
      })
    }
    if (type === 'asc_name') {
      const orderedRecipes = recipes.sort((a, b) => {
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
        return 0
      })
      dispatch({
        type: ORDER_ASC_NAME,
        payload: {
          orderedRecipes,
          name: type
        }
      })
    }
  } else {
    if (type === 'higher_score') {
      const orderedRecipes = filtered.sort(
        (a, b) => a.spoonacularScore - b.spoonacularScore
      )
      dispatch({
        type: ORDER_HIGHER_SCORE,
        payload: {
          orderedRecipes,
          name: type
        }
      })
    }
    if (type === 'asc_name') {
      const orderedRecipes = filtered.sort((a, b) => {
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
        return 0
      })
      dispatch({
        type: ORDER_ASC_NAME,
        payload: {
          orderedRecipes,
          name: type
        }
      })
    }
  }
}

export const orderDesc = (type) => (dispatch, getState) => {
  const filterBy = getState().filterBy
  const recipes = getState().recipes.slice()
  const filtered = getState().filteredRecipes.slice()
  // const orderBy = getState().orderBy
  if (filterBy === 'All') {
    if (type === 'lower_score') {
      const orderedRecipes = recipes.sort(
        (a, b) => b.spoonacularScore - a.spoonacularScore
      )
      dispatch({
        type: ORDER_LOWER_SCORE,
        payload: {
          orderedRecipes,
          name: type
        }
      })
    }
    if (type === 'desc_name') {
      const orderedRecipes = recipes.sort((a, b) => {
        if (a.title < b.title) return 1
        if (a.title > b.title) return -1
        return 0
      })
      dispatch({
        type: ORDER_DESC_NAME,
        payload: {
          orderedRecipes,
          name: type
        }
      })
    }
  } else {
    if (type === 'lower_score') {
      const orderedRecipes = filtered.sort(
        (a, b) => b.spoonacularScore - a.spoonacularScore
      )
      dispatch({
        type: ORDER_LOWER_SCORE,
        payload: {
          orderedRecipes,
          name: type
        }
      })
    }
    if (type === 'desc_name') {
      const orderedRecipes = filtered.sort((a, b) => {
        if (a.title < b.title) return 1
        if (a.title > b.title) return -1
        return 0
      })
      dispatch({
        type: ORDER_DESC_NAME,
        payload: {
          orderedRecipes,
          name: type
        }
      })
    }
  }
}

export const reset = () => {
  return (dispatch) => {
    dispatch({
      type: RESET
    })
  }
}
