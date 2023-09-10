import React, { useEffect } from "react";

function Popular() {
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
    console.log(data);
  };
  return <div>Popular</div>;
}

export default Popular;
