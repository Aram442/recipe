import styled, { keyframes } from "styled-components";
import { BrowserRouter, Link } from "react-router-dom";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import Search from "./components/Search";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/"}>Deliciousss</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    svg {
      font-size: 1.8rem;
    }
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 400;
  }
`;

export default App;
