import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=f2cf5c8427214c43b5a90ae619e542b9&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]); //dependsece

  return (
    <Grid>
      {searchedRecipes.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  @media (max-width: 768px) {
    grid-gap: 0rem;
    display: flex;
    flex-direction: column;
  }
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
  @media (max-width: 768px) {
    padding: 0.5rem;
    font-size: 0.9rem;
    img {
      width: 100%;
      border-radius: 0.5rem;
    }

    h4 {
      text-align: center;
      padding: 1rem 1rem 0rem 1rem;
    }
  }
`;

export default Searched;


