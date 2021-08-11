const { Diet } = require('../db')
const axios = require('axios').default
const { API_KEY3 } = process.env
const { BASE_URL, BASE_NEXT, RECIPE_DETAIL} = require('../../constants')

async function getDiets (req, res, next) {
  try{
  const dietsData = await axios.get(`${BASE_URL}${BASE_NEXT}?apiKey=${API_KEY3}${RECIPE_DETAIL}&number=100`)
  var dietTypes = []
  await dietsData.data.results.forEach(result => {
     result.diets.forEach(result => {
      if (!dietTypes.includes(result)) {
        dietTypes.push(result)
      }
    })
  })
  for(let i = 0; i < dietTypes.length; i++) {
    await Diet.findOrCreate({
      where: {
        name: dietTypes[i]
      }
    })
  }
  let dietResults = await Diet.findAll();
  res.send(dietResults)
} catch (error) {
  next(error)
}
}

module.exports = {
getDiets
}
