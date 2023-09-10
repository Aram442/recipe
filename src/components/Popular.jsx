import React, { useEffect, useState } from "react";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    //we should use useEffect to Load my API Every (reRenderd Project)
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    // to get information about Our API work or not ==> console.log(data);
    setPopular(data.recipes);
  };
  return (
    <div>
      {popular.map((recipe) => {
        return (
          <div key={recipe.id}>
            {/* key={recipe.id} to solve this problem in Console Warning: Each child in a list should have a unique "key" prop.*/}
            
            <p>{recipe.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Popular;
