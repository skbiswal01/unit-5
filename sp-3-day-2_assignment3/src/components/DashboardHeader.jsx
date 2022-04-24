import React from "react";
import styled from "styled-components";
import ThemeToggler from "./ThemeToggler";
import "../App.css";
const Main = styled.div`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  border-bottom: ${(props) => props.theme.colors.border};
  margin-top: 2rem;
  width: 90%;
  margin: auto;
  padding: 5px 15px;
  transition: 0.5s ease;
`;

const ThemedTitle = () => {
  return (
    <Main className="main">
      <div className="dashboard_nav">
        <h2>My Dashboard</h2>
        <ThemeToggler />
      </div>
    </Main>
  );
};

export default ThemedTitle;