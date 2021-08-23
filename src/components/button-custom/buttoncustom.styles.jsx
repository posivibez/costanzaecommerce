import styled, { css } from "styled-components";

const getButtonType = (props) => {
  if (props.google) {
    return googleSignInStyles;
  }
  if (props.inverted) {
    return invertedStyles;
  }
};

const getPageContext = (props) => {
  if (props.collectionPage) {
    return collectionPageStyles;
  }
};

const collectionPageStyles = css`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 70%;
  z-index: 3;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  &:hover {
    opacity: 1;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  border: none;

  &:hover {
    background-color: #357ae8;
    color: white;
    border: none;
  }
`;

const invertedStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid transparent;
    opacity: 1;
  }
`;

export const CustomButton = styled.button`
  background-color: black;
  color: white;
  border: 1px black solid;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bolder;
  transition: 300ms ease all;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    cursor: pointer;
  }

  ${getButtonType}

  ${getPageContext}
`;
