export function validate (input) {
  let errors = {}
  if (!input.title) {
    errors.title = 'Title is required'
  } else if (!/([A-Z]|[a-z])\w+/.test(input.name)) {
    errors.name = 'Title is invalid'
  }
  if (!input.summary) {
    errors.summary = 'Summary is required'
  } else if (!/([A-Z]|[a-z])|\w+/.test(input.summary)) {
    errors.summary = 'Summary is required'
  }
  if (!/^([0-9]|[1-9][0-9]|[1][0][0])$/.test(input.spoonacularScore)) {
    errors.spoonacularScore = 'Score must be a number between 0 and 100'
  }
  if (!/^([0-9]|[1-9][0-9]|[1][0][0])$/.test(input.healthScore)) {
    errors.healthScore = 'Score must be a number between 0 and 100'
  }
  return errors
}
