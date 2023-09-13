import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [detailData, setDetailData] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams(); //bo wargrtnaway Nawakan

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=32d9a7571068462f90d8e55cb706b959`
    );
    const detailData = await data.json();
    setDetailData(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
    // console.log(params.type);
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{detailData.title}</h2>
        <img src={detailData.image} alt={detailData.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: detailData.summary }}></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: detailData.instructions }}
            ></h3>
          </div>
        )}
        {activeTab === "ingredients" &&
          (
         <ul>
          {detailData.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul> 
          )}
      </Info>
    </DetailWrapper>
  );
}
const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background-color: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
