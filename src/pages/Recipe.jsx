import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [detailData, setDetailData] = useState([]);
  const [activeTab, setActiveTab] = useState("instructions");
  let params = useParams(); //bo wargrtnaway Nawakan

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=f2cf5c8427214c43b5a90ae619e542b9`
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
      <div className="h2-img">
        <h2>{detailData.title}</h2>
        <img src={detailData.image} alt={detailData.title} />
      </div>
      <Info>
        <div className="button">
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
        </div>
        {activeTab === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: detailData.summary }}></h3>
            <h3
              dangerouslySetInnerHTML={{ __html: detailData.instructions }}
            ></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
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
  margin-top: 3rem;
  // margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: 1rem;
    text-align: justify;
  }
  li {
    font-size: 1.1rem;
    line-height: 2rem;
  }
  ul {
    margin: 1.3rem 0rem;
  }

  @media (max-width: 768px) {
    margin-top: 0rem;
    flex-direction: column;

    .h2-img {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .button {
    }
    img {
      width: 100%;
      min-height: 15rem;
      border-radius: 0.5rem;
    }
    h2 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      align-items: center;
    }
    h3 {
      font-size: 0.7rem;
      text-align: justify;
      margin: 1rem 0rem;
      line-height: 1.5rem;
    }
    li {
      font-size: 0.8rem;
      line-height: 1.5rem;
    }
    ul {
      margin: 1.3rem 0rem;
    }
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  color: #313131;
  background-color: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem;
    border-radius: 0.3rem;
    border: 1.6px solid black;
    margin-right: 0.3rem;
    font-weight: 300;
  }
`;

const Info = styled.div`
  margin-left: 2rem;

  @media (max-width: 768px) {
    margin: 1rem 0rem 0rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Recipe;
