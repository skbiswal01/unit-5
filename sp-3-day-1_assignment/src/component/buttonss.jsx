import styled from 'styled-components';
const Button = styled.button`
    margin: 10px;
    background-color: ${(prop)=>{return prop.bgcolor ? `${prop.bgcolor}`:"transparent"}};
    border-style: ${(prop)=>{return prop.border ? `${prop.border}`:"none"}};
    padding: 15px;
    font-size: 1.5em;
    margin: 10px;
    color: ${(prop)=>{return prop.color ? `${prop.color}`:"black"}};
    border-radius: 5px;

`;

export default Button;
