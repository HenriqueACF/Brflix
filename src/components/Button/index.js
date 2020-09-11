import styled from 'styled-components';

export const Button = styled.button`
 
    color: #008000;
    border: 1px solid #008000;
    background:var(--black);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
    }
  
 
`;
export default Button;