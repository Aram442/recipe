import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
}

const FormStyle = styled.form`
  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.6rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }

  @media (max-width: 768px) {
    body {
      margin: 0% 10%;
    }
    width: 100%;
    position: relative;

    input {
      font-size: 0.8rem;
      padding: 0.5rem 3rem;
      border-radius: 0.3rem;
      touchaction: "none"; // Disable zoom on touch devices
    }
    svg {
      font-size: 0.8rem;
      transform: translate(100%, -50%);
    }
  }
`;

export default Search;
