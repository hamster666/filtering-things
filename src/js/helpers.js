const getUniqueSet = (data, field) =>
  [...new Set(data.map((obj) => obj[field]))].sort();

const getIngredientsSet = (data) => {
  console.log('data', data);
  const genreSet = new Set();
  data.forEach((arr) => arr.ingredients.forEach((x) => genreSet.add(x)));
  return [...genreSet].sort();
};

export const getFilterOptions = (drinks) => ({
  alcoholic: getUniqueSet(drinks, "alcoholic"),
  glassType: getUniqueSet(drinks, "glassType"),  
  // types: getUniqueSet(drinks, "type"),
  ingredients: getIngredientsSet(drinks),
});

export const sortAlphabetically = (data) =>
  data.sort((a, b) => a.strDrink.localeCompare(b.strDrink));

  export const transformData = (data) => {
    return data.map((data) => {
      const ingredients = [];
      for(let i=1; i<10; i++) {
        if (data['strIngredient'+i])  ingredients.push(data['strIngredient'+i]);
      }

      return {
      alcoholic: data.strAlcoholic,
      drinkName: data.strDrink,
      glassType: data.strGlass,
      photo: data.strDrinkThumb,
      ingredients: ingredients
    }
    
  })
};
