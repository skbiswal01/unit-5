import React from "react";
import styled from "styled-components";
import "../App.css";
const Header = styled.div`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  padding: 0 33px;
  transition: 0.5s ease;
`;

const ActiveUsers = () => {
  return (
    <div className="activeUsers">
      <Header className="header">
        <p>Active Users</p>
        <p className="date">For August 2020</p>
      </Header>
    </div>
  );
};

export default ActiveUsers;