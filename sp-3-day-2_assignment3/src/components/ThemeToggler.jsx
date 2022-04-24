import React, { useContext } from "react";
import Switch from "react-switch";
import styled from "styled-components";

import { ThemeContext } from "../context/ThemeContext";

const Icon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggler = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checked={isDarkTheme}
      handleDiameter={20}
      checkedIcon={<Icon></Icon>}
      onColor="#191970"
      uncheckedIcon={<Icon></Icon>}
      offColor="#87ceeb"
    />
  );
};

export default ThemeToggler;